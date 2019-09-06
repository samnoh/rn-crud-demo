import jsonServer from '../api/jsonServer';

const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';

const getPosts = res => ({
    type: GET_POSTS_SUCCESS,
    payload: res.data
});

const deletePost = id => ({
    type: DELETE_POST,
    payload: id
});

const editPost = (id, title, content) => ({
    type: EDIT_POST,
    payload: { id, title, content }
});

export const getBlogPosts = dispatch => async callback => {
    try {
        dispatch({ type: GET_POSTS_PENDING });
        const res = await jsonServer.get('/blogposts');
        dispatch(getPosts(res));
        if (callback) callback();
    } catch (e) {
        dispatch({ type: GET_POSTS_FAILURE, payload: e });
    }
};

export const addBlogPost = dispatch => async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) callback();
};

export const deleteBlogPost = dispatch => async (id, callback) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch(deletePost(id));
    if (callback) callback();
};

export const editBlogPost = dispatch => async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch(editPost(id, title, content));
    if (callback) callback();
};

const blogReducer = (state, action) => {
    switch (action.type) {
        case GET_POSTS_PENDING:
            return { ...state, pending: true, error: false };
        case GET_POSTS_SUCCESS:
            return { ...state, pending: false, posts: action.payload };
        case GET_POSTS_FAILURE:
            return { ...state, pending: false, error: true };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(blogPost => blogPost.id !== action.payload)
            };
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map(blogPost =>
                    blogPost.id === action.payload.id ? action.payload : blogPost
                )
            };
        default:
            return state;
    }
};

export default blogReducer;
