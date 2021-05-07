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
                {value: 1, label: "Know the Developers", trigger: '5'},
                {value: 2, label: "I want to order", trigger: '6'}
            ]
            
        },
        {
            id: '5',
            message: 'MSD has developed this application keeping Human Machine Interaction in mind!!',
            trigger: '7'
        },
        {
            id: '6',
            message: "Go to Scan QR Code and Order",
            end: true
        },
        {
            id: '7',
            message: 'Order some food go to Scan QR code!!',
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