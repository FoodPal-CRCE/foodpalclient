import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen'
import SupportScreen from '../screens/SupportScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} options={{headerShown: false}} />
    </Stack.Navigator>
)

export default ProfileNavigator;