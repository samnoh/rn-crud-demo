import createDataContext from './createDataContext';
import blogReducer, { addBlog } from '../ducks/blog';

const addBlogPost = dispatch => () => {
    dispatch(addBlog());
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);
