import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@mdi/react'
import { mdiAccount, mdiQrcodeScan } from '@mdi/js'
// import ScanScreen from '../screens/ScanScreen';
import MainScreen from '../screens/MainScreen';
import { IconButton } from 'react-native-paper';
import ScanNavigator from './ScanNavigator';
import BlogScreen from '../screens/BlogScreen';
import BlogNavigator from './BlogNavigator';
import {TouchableOpacity, StyleSheet, View, Image, Text} from 'react-native'
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DMP from '../screens/DMP';
import ProfileNavigator from './ProfileNavigator';
// import { mdiQrcodeScan } from '@mdi/js';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    const [hider, setHider] = useState(false);
    return(
    <Tab.Navigator tabBarOptions={{
        activeTintColor: "#6617F5",
        inactiveTintColor: "black",
        style:{
            height: "8%"
        }
    }}
    initialRouteName="ScanScreen"
    >
        <Tab.Screen 
        name="DMP" 
        component={DMP}
        options={{
            // tabBarIcon: ({color,size}) => <Icon name="rocket" size={30} color="#900" />
            tabBarIcon: ({focused}) => (
                <View style={styles.screenContainer}>
                    <Image 
                    source={require('../assets/foodanalysis2.png')}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? '#6617F5' : '#748c94',
                        marginBottom: 20,
                    }}
                   
                    />
                   
                </View>
            ),
            tabBarVisible: false
       }}/>
        <Tab.Screen 
        name="Blogs" 
        component={BlogNavigator}
        options={{
            tabBarVisible: false,
            tabBarIcon: ({focused}) => (
                <View style={styles.screenContainer} onPress={()=>{setHider(true)}}>
                    <Image 
                    source={require('../assets/foodanalysis1.png')}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? '#6617F5' : '#748c94',
                        marginBottom: 20,
                    }}
                    />
                   
                </View>
            )
        }}/>
        <Tab.Screen 
        name="ScanScreen" 
        component={ScanNavigator}
        options={({navigation}) => ({
                tabBarIcon: ({focused}) => (
                <View style={styles.screenContainer} onPress={()=> setHider(false)}>
                    
                    <Text style={{color: focused ? '#6617F5' : '#748c94', fontSize: 12}}>DMP</Text>
                </View>
            ),
            tabBarButton: () => (
                <TouchableOpacity
                style={{
                    // top: hider ? 500:-15,
                    justifyContent: "center",
                    alignItems: 'center',
                    ...styles.shadow
                }}
                onPress= {() => {navigation.navigate("ScanScreen")}}
                >
                    <View style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: '#6617F5'
                    }}>
                        <Image 
                    source={require('../assets/sacnqr-edited.png')}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        alignSelf: 'center',
                        display: "flex",
                        flex: 1,
                        alignItems: 'center',
                        tintColor: 'white'
                        
                    }
                }
                    />
                    </View>
                </TouchableOpacity>
            )
            
        })}/>

        <Tab.Screen 
        name="Orders" 
        component={OrdersScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={styles.screenContainer}>
                    <Image 
                    source={require('../assets/itemlist-edited.png')}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? '#6617F5' : '#748c94',
                        marginBottom: 20,
                    }}
                    />
                   
                </View>
            )
        }}
        /> 
         
         <Tab.Screen 
        name="Profile" 
        component={ProfileNavigator}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={styles.screenContainer}>
                    <Image 
                    source={require('../assets/user-edited.png')}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? '#6617F5' : '#748c94',
                        marginBottom: 20,
                    }}
                    />
                   
                </View>
            )
        }}/>
    </Tab.Navigator>
)
    }

export default AppNavigator;

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