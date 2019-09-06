import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    textInput: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        margin: 5
    },
    contentInput: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        margin: 5,
        flex: 1
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
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.textInput} value={title} onChangeText={setTitle} />
            <View style={{ flex: 1 }}>
                <Text style={styles.label}>Content</Text>
                <TextInput
                    clearButtonMode="always"
                    multiline={true}
                    style={styles.contentInput}
                    value={content}
                    onChangeText={setContent}
                />
                <View style={{ marginBottom: 20 }}>
                    <Button
                        title="Save Blog Post"
                        onPress={() => {
                            if (title === '' || content === '') return;
                            onSubmit(title, content);
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

export default BlogPostForm;
