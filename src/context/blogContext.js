import createDataContext from './createDataContext';
import blogReducer, { addPost, deletePost } from '../ducks/blog';

const addBlogPost = dispatch => (title, content, callback) => {
    dispatch(addPost(title, content));
    callback();
};

const deleteBlogPost = dispatch => id => {
    dispatch(deletePost(id));
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
);
