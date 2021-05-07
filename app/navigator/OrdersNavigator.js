import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';



const Stack = createStackNavigator();

const OrdersNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="OrdersScreen" component={OrdersScreen}options={{headerShown: false}}/>
        <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen}options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default OrdersNavigator;