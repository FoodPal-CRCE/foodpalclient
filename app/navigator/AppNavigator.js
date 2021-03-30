import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@mdi/react'
import { mdiAccount, mdiQrcodeScan } from '@mdi/js'
// import ScanScreen from '../screens/ScanScreen';
import MainScreen from '../screens/MainScreen';
import { IconButton } from 'react-native-paper';
import ScanNavigator from './ScanNavigator';
import DisectPlate from '../screens/DisectPlate';
import AllRestaurant from '../screens/AllRestaurant';
import BlogScreen from '../screens/BlogScreen';
import BlogNavigator from './BlogNavigator';
// import { mdiQrcodeScan } from '@mdi/js';
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
        name="MainScreen" 
        component={MainScreen}
        options={{
            // tabBarIcon: ({color,size}) => <Icon name="rocket" size={30} color="#900" />
        }}/>
        <Tab.Screen 
        name="ScanScreen" 
        component={ScanNavigator}
        options={({navigation}) => ({
            // tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ScanScreen")}/>,
            // tabBarIcon: ({color,size}) => <Icon path={mdiQrcodeScan} color={color} size={size}/>
        })}/>

        <Tab.Screen 
        name="DisectPlate" 
        component={DisectPlate}
        options={{
            // tabBarIcon: ({color,size}) => <Icon path={mdiAccount} size={size} color={color}/>
        }}/> 
        <Tab.Screen 
        name="Blogs" 
        component={BlogNavigator}
        options={{
            // tabBarIcon: ({color,size}) => <Icon path={mdiAccount} size={size} color={color}/>
        }}/> 
    </Tab.Navigator>
)

export default AppNavigator;