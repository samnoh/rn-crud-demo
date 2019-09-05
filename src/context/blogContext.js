import createDataContext from './createDataContext';
import blogReducer, { addPost, deletePost } from '../ducks/blog';

const addBlogPost = dispatch => title => {
    dispatch(addPost(title));
};

const deleteBlogPost = dispatch => id => {
    dispatch(deletePost(id));
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
);
