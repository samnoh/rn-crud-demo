import React, { useContext, useEffect, useState } from 'react';
import {
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
    StyleSheet,
    Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/blogContext';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 25
    },
    row: {
        marginTop: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    card: {
        marginLeft: (width * 0.1) / 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gray',
        width: '45%',
        borderRadius: 5,
        padding: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    model: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10
    },
    modalTitle: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    modalTitleInput: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 30,
        marginVertical: 15,
        marginHorizontal: 20,
        borderRadius: 3
    }
});

const IndexScreen = ({ navigation }) => {
    const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        }); // executed when returning to this screen

        return () => listener.remove();
    }, []);

    return (
        <>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl refreshing={state.pending} onRefresh={getBlogPosts} />
                }
            >
                {state.pending && <Text>Loading...</Text>}
                {state.error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        keyExtractor={blogPost => blogPost.id}
                        data={state.posts}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() =>
                                    navigation.navigate('Show', { id: item.id, name: item.title })
                                }
                            >
                                <Text numberOfLines={1} style={styles.title}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <MaterialIcons style={styles.icon} name="delete" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </ScrollView>
        </>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => ({
    headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={25} style={{ marginRight: 20 }} />
        </TouchableOpacity>
    ),
    headerBackTitle: 'Back'
});

export default IndexScreen;
