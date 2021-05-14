import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import OnboardingUI from '../screens/OnboardingUI';
// import RestaurantScreen from '../screens/RestaurantScreen';
import ScanScreen from '../screens/ScanScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import MainScreen from '../screens/MainScreen';
import RecentOrders from '../screens/RecentOrders';

const Stack = createStackNavigator();

const ScanNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}options={{headerShown: false}}/>
        <Stack.Screen name="ScanScreen" component={ScanScreen}options={{headerShown: false}}/>
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false}} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown: false}} />
        <Stack.Screen name="OrdersScreen" component={RecentOrders} options={{headerShown: false}} />
    </Stack.Navigator>
)

export default ScanNavigator;