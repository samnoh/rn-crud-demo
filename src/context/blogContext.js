import createDataContext from './createDataContext';
import blogReducer, { getPosts, deletePost, editPost } from '../ducks/blog';
import jsonServer from '../api/jsonServer';

const getBlogPosts = dispatch => async callback => {
    const res = await jsonServer.get('/blogposts');
    dispatch(getPosts(res));
    if (callback) callback();
};

const addBlogPost = dispatch => async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) callback();
};

const deleteBlogPost = dispatch => async (id, callback) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch(deletePost(id));
    if (callback) callback();
};

const editBlogPost = dispatch => async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch(editPost(id, title, content));
    if (callback) callback();
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
    [] // initial value
);
