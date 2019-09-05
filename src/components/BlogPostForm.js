import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5
    }
});

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />
            <Text style={styles.label}>Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent} />
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Save Blog Post"
                    onPress={() => {
                        if (title === '' || content === '') return;
                        onSubmit(title, content);
                    }}
                />
            </View>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

export default BlogPostForm;
