import uuid from 'uuid/v4';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';

export const addPost = (title, content) => ({
    type: ADD_POST,
    payload: { title, content }
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
        case ADD_POST:
            return [
                ...state,
                { id: uuid(), title: action.payload.title, content: action.payload.content }
            ];
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
