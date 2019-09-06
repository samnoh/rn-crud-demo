import React, { useContext } from 'react';

import { Context } from '../context/blogContext';
import BlogPostFrom from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');

    const blogPost = state.find(blogPost => blogPost.id === id);

    return (
        <BlogPostFrom
            initialValues={{ ...blogPost }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop());
            }}
        />
    );
};

EditScreen.navigationOptions = () => ({
    title: 'Edit'
});

export default EditScreen;
