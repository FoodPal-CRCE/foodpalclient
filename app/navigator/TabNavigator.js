import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import BlogNavigator from './BlogNavigator';
import ScanNavigator from './ScanNavigator';
import MainScreen from '../screens/MainScreen';
import DisectPlate from '../screens/DisectPlate';
import BlogScreen from '../screens/BlogScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) =>{
    <TouchableOpacity
    style={{
        top: -25,
        justifyContent: "center",
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress={onPress}>
        <View style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
}

function Tabs() {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 80,
                ...styles.shadow
            }
        }}
        >
            <Tab.Screen name="Home" component={DisectPlate} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.screenContainer}>
                        <Image 
                        source={require('../assets/foodanalysis2.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>DMP</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Blog" component={BlogNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.screenContainer}>
                        <Image 
                        source={require('../assets/foodanalysis1.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>DMP</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Scan" component={ScanNavigator} options={{
                tabBarIcon: ({focused})=>(
                    <Image 
                    source={require('../assets/sacnqr-edited.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: '#fff'
                    }}
                    />
                ),
                tabBarButton: (props)=>(
                    <CustomTabBarButton {...props}/>
                )
            }}/>
            <Tab.Screen name="Orders" component={OrdersScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.screenContainer}>
                        <Image 
                        source={require('../assets/oderspage-edited.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>DMP</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Profile" component={MainScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.screenContainer}>
                        <Image 
                        source={require('../assets/user-edited.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>DMP</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}



// function TabNavigator() {
//     return (
//         // <NavigationContainer>
//         //     <Tabs /> 
//         // </NavigationContainer>
//     );
// }

export default Tabs;

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    screenContainer: {
        alignItems:"center",
        justifyContent:"center", 
        top: 10
    }
});
