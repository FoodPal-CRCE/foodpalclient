import React, { Component } from 'react';
import { useState } from 'react';
import { View, StyleSheet,Text, Image } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { signup } from '../reducers/signupSlice';
import {useDispatch} from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
function SignupScreen(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile_number, setMobile_Number] = useState('');
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const signupHandle = () => {
        const values = {
                email: userName,
                password: password,
                name: name,
                phone_number: mobile_number,
                city: city
        }
        console.log(values);
        dispatch(signup(values));
    }
    return (
      <ScrollView style={styles.main}>
        <Image source={require('../assets/logo.png')} style={styles.img} />
          <View style={styles.login}>
          <Text style={styles.loginText}>
              Signup
          </Text>
          <TextInput
                style={styles.textin}
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
                foc
            />
            <TextInput
            style={styles.textin}
                label="Username"
                value={userName}
                onChangeText={text => setUserName(text)}
                foc
            />
            <TextInput
                style={styles.textin}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                foc
                secureTextEntry={true}
            />
            <TextInput
                style={styles.textin}
                label="Mobile Number"
                value={mobile_number}
                onChangeText={text => setMobile_Number(text)}
                foc
            />
                <TextInput
                style={styles.textin}
                label="City"
                value={city}
                onChangeText={text => setCity(text)}
                foc
            />


            <Button style={styles.submit} contentStyle={{height: 50}} mode="contained" onPress={() => signupHandle()}>
                Submit
            </Button>

            <View style={styles.signupText} >
                <Text>
                    Already have an account? <Text onPress={()=>this.props.navigation.navigate('LoginScreen')}>Login</Text>
                </Text>
            </View>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    img:{
        alignSelf:'center',
        margin: 20
      },
    main:{
        flex: 1,
        
    },
    mainText:{
        margin: "10%",
        justifyContent:"center",
        alignSelf:"center",
        alignContent: 'center',
        fontSize: 30,
    },
    textin:{
        marginTop: 10,
    },
    login:{
        flex: 0.75,
        width: "85%",
        justifyContent:"center",
        alignSelf:"center",
    },
    submit:{
        marginTop: 10,
    },
    loginText:{
        fontSize: 20,
        margin: 20,
        alignSelf: "center"
    },
    signupText:{
        alignItems: "center",
        marginTop: 10,
    }
})

export default SignupScreen;