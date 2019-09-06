import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Context } from '../context/blogContext';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    contentText: {
        fontSize: 20
    }
});

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View style={styles.container}>
            <Text style={styles.contentText}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => ({
    headerRight: (
        <TouchableOpacity
            onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
        >
            <MaterialCommunityIcons
                name="square-edit-outline"
                size={25}
                style={{ marginRight: 20 }}
            />
        </TouchableOpacity>
    ),
    title: navigation.getParam('name'),
    headerBackTitle: 'Back'
});

export default ShowScreen;
