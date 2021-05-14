import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DMP from '../screens/DMP';
import DMPDetails from '../screens/DMPDetails';



const Stack = createStackNavigator();

const DMPNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="DMP" component={DMP}options={{headerShown: false}}/>
        <Stack.Screen name="DMPDetails" component={DMPDetails}options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default DMPNavigator;