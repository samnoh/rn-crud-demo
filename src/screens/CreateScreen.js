import React, { useContext } from 'react';

import { Context } from '../context/blogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate('Index'));
            }}
        />
    );
};

CreateScreen.navigationOptions = () => ({
    title: 'New Post'
});

export default CreateScreen;
