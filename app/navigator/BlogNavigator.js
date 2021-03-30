import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BlogScreen from '../screens/BlogScreen';
import BlogDetailsScreen from '../screens/BlogDetailsScreen';

const Stack = createStackNavigator();

const BlogNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="BlogScreen" component={BlogScreen}options={{headerShown: false}}/>
        <Stack.Screen name="BlogDetailsScreen" component={BlogDetailsScreen} options={{headerShown: false}} />
    </Stack.Navigator>
)

export default BlogNavigator;