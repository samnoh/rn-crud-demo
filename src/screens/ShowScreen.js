import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/blogContext';

const styles = StyleSheet.create({});

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return <Text>{blogPost.title}</Text>;
};

export default ShowScreen;
