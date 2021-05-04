import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatBot from 'react-native-chatbot';
import {LogBox} from 'react-native'
LogBox.ignoreAllLogs();//Ignore all log notifications
function SupportScreen() {
    const steps = [
        {
            id: '1',
            message: 'Hello How Are You?',
            trigger: '2'
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'How can I Help you today',
            trigger: '4'
        },
        {
            id: '4',
            
            options: [
                {value: 1, label: "Help Me", trigger: '5'},
                {value: 2, label: "I want to order", trigger: '6'}
            ]
            
        },
        {
            id: '5',
            message: 'Oh fuck you',
            end: true
        },
        {
            id: '6',
            message: "Go to Scan QR Code and Order",
            end: true
        }
    ]
    return (
        <View style={styles.container}>
            <ChatBot 
                steps={steps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text: {
        fontSize: 25,
    }
})

export default SupportScreen;