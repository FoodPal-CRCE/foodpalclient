import axios from "axios";
import React, { Component, useState } from "react"
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Modal, Pressable } from "react-native"
import { RNCamera } from "react-native-camera"


const PendingView = () => (
    <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: 'center',
        }}
    >
        <ActivityIndicator />
    </View>
);
const LoadingView = () => {
    <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: 'center',
        }}
    >
        <Text>Analyzing..!!</Text>
    </View>
}

// const ResultModal = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     return (

//     )
// }

export default class ClickImage extends Component {

    state = {
        result: "",
        modalVisible: false,
        analyzing: false
    }
    setResult = (result) => {
        this.setState({ result: result });
    }
    setModalVisible = (value) => {
        this.setState({ modalVisible: value });
    }
    render() {
        const { modalVisible, result } = this.state;
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                        return (
                            <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'center' }}>
                                <View style={styles.centeredView}>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {

                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
                                                <Text style={styles.modalText}>{result}</Text>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => setModalVisible(!modalVisible)}
                                                >
                                                    <Text style={styles.textStyle}>Close</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>

                                </View>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>

                                </TouchableOpacity>
                            </View>
                        );
                    }}
                </RNCamera>
            </View>
        );
    }

    takePicture = async function (camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);


        let formData = new FormData();

        formData.append("image", {
            uri: data.uri,
            type: "image/jpg",
            name: "image.jpg"
        }, "[PROXY]");
        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };
        fetch("https://pure-taiga-36828.herokuapp.com/classify", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                var answer = JSON.parse(result);
                this.setResult(answer["result"])
                this.setModalVisible(true);
            })
            .catch(error => console.log('error', error));

        //activate component which shows result

    };
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        // flex: 0,
        // backgroundColor: '#fff',
        // borderRadius: 5,
        // padding: 15,
        // paddingHorizontal: 20,
        // alignSelf: 'center',
        // margin: 20,
        width: 80,
        height: 80,
        borderWidth: 5,
        borderRadius: 60,
        borderColor: "#FFFFFF",
        marginBottom: 20
    },

    //modal style
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
});

