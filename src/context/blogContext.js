import createDataContext from './createDataContext';
import blogReducer, { addPost, deletePost, editPost } from '../ducks/blog';

const addBlogPost = dispatch => (title, content, callback) => {
    dispatch(addPost(title, content));
    callback();
};

const deleteBlogPost = dispatch => id => {
    dispatch(deletePost(id));
};

const editBlogPost = dispatch => (id, title, content, callback) => {
    dispatch(editPost(id, title, content));
    callback();
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'TEST', content: 'test content', id: 1 }]
);
