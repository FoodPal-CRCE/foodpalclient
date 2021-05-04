import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { getCustomer, saveme } from '../reducers/signinSlice';

function InitialScreen({navigation}) {
    const dispatch = useDispatch();
    const caller = async() => {
        if(await AsyncStorage.getItem('me')!==null){
            const data = await AsyncStorage.getItem('me');
            console.log(data);
            dispatch(getCustomer(data));
            dispatch(saveme(data));
            navigation.reset({
                index: 0,
                routes: [
                  {name: 'AppNavigator'}
                ],
                
              })
        }
        else{
            navigation.navigate("OnboardingUI")
        }
    }
    useEffect(() => {
        setTimeout(() =>{
            caller();
        }, 2500)
    },[])
    return (
        <View style={styles.container}>
            <Text style={styles.textMain}>FoodPal</Text>
            <Text style={styles.textSub}>Your Safety in Your hands</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6200ed",
        justifyContent: "center",
        alignContent: "center",
        height: "100%"
    },
    textMain: {
        fontSize: 32,
        fontWeight: "bold",
        alignSelf:"center",
        fontStyle: 'italic'
    },
    textSub: {
        fontSize: 20,
        alignSelf: "center"
    }
    
})

export default InitialScreen;