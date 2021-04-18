import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import OnboardingUI from '../screens/OnboardingUI';
import AppNavigator from './AppNavigator';
const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="OnboardingUI" component={OnboardingUI} options={{headerShown: false}}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}options={{headerShown: false}}/>
        <Stack.Screen name="SignupScreen" component={Signup}options={{headerShown: false}}/>
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default AuthNavigator;