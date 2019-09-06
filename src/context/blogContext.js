import createDataContext from './createDataContext';
import blogReducer, {
    getBlogPosts,
    addBlogPost,
    deleteBlogPost,
    editBlogPost
} from '../ducks/blog';

export const { Context, Provider } = createDataContext(
    blogReducer,
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
    { pending: false, error: false, posts: [] } // initial value
);
