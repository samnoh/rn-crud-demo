import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { Context } from '../context/blogContext';

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

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />
            <Text style={styles.label}>Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent} />
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Add Blog Post"
                    onPress={() => {
                        if (title === '' || content === '') return;
                        addBlogPost(title, content, () => {
                            navigation.navigate('Index');
                        });
                    }}
                />
            </View>
        </View>
    );
};

export default CreateScreen;
