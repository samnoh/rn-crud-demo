import uuid from 'uuid/v4';

const ADD_BLOG = 'ADD_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';

export const addPost = title => ({
    type: ADD_BLOG,
    payload: title
});

export const deletePost = id => ({
    type: DELETE_BLOG,
    payload: id
});

const blogReducer = (state, action) => {
    switch (action.type) {
        case ADD_BLOG:
            return [...state, { id: uuid(), title: action.payload }];
        case DELETE_BLOG:
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
};

export default blogReducer;
