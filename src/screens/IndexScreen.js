import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import { Context } from '../context/blogContext';

const styles = StyleSheet.create({});

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                keyExtractor={blogPost => blogPost.title}
                data={state}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    );
};

export default IndexScreen;
