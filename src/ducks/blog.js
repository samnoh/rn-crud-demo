const ADD_BLOG = 'ADD_BLOG';

export const addBlog = () => ({
    type: ADD_BLOG
});

const blogReducer = (state, action) => {
    switch (action.type) {
        case ADD_BLOG:
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export default blogReducer;
