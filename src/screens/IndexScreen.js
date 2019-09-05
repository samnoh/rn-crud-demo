import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Button,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    Vibration
} from 'react-native';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';

import { Context } from '../context/blogContext';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
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
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    const [title, setTitle] = useState('');
    const [isVisible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(!isVisible);
    };

    const renderModal = () => {
        return (
            <Modal
                isVisible={isVisible}
                customBackdrop={
                    <TouchableWithoutFeedback onPress={toggleModal}>
                        <View style={{ flex: 1, backgroundColor: 'black' }} />
                    </TouchableWithoutFeedback>
                }
            >
                <View style={styles.model}>
                    <Text style={styles.modalTitle}>Enter Title</Text>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        style={styles.modalTitleInput}
                        autoFocus
                    />
                    <View style={styles.modalButtonContainer}>
                        <Button
                            title="Ok"
                            onPress={() => {
                                if (title !== '') {
                                    addBlogPost(title);
                                    Vibration.vibrate(500);
                                }
                                toggleModal();
                                setTitle('');
                            }}
                        />
                        <Button
                            title="Cancle"
                            onPress={() => {
                                toggleModal();
                                setTitle('');
                            }}
                        />
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button title="Add Post" onPress={toggleModal} />
            {renderModal()}
            <FlatList
                numColumns={2}
                columnWrapperStyle={styles.row}
                keyExtractor={blogPost => blogPost.id}
                data={state}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Show', { id: item.id })}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <MaterialIcons style={styles.icon} name="delete" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    );
};

export default IndexScreen;
