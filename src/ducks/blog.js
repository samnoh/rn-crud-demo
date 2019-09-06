const GET_POSTS = 'GET_POSTS';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';

export const getPosts = res => ({
    type: GET_POSTS,
    payload: res.data
});

export const deletePost = id => ({
    type: DELETE_POST,
    payload: id
});

export const editPost = (id, title, content) => ({
    type: EDIT_POST,
    payload: { id, title, content }
});

const blogReducer = (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case DELETE_POST:
            return state.filter(blogPost => blogPost.id !== action.payload);
        case EDIT_POST:
            return state.map(blogPost =>
                blogPost.id === action.payload.id ? action.payload : blogPost
            );
        default:
            return state;
    }
};

export default blogReducer;
