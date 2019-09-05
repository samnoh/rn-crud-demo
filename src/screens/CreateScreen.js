import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/blogContext';
import BlogPostForm from '../components/BlogPostForm';

const styles = StyleSheet.create({});

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

export default CreateScreen;
