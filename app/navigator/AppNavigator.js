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
import {TouchableOpacity, StyleSheet, View, Image, Text} from 'react-native'
import OrdersScreen from '../screens/OrdersScreen';
// import { mdiQrcodeScan } from '@mdi/js';
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: "#6617F5",
        inactiveTintColor: "white",

    }}
    initialRouteName="ScanScreen"
    >
        <Tab.Screen 
        name="Disect My Plate" 
        component={DisectPlate}
        options={{
            // tabBarIcon: ({color,size}) => <Icon name="rocket" size={30} color="#900" />
            tabBarIcon: ({focused}) => (
                <View style={styles.screenContainer}>
                    <Image 
                    source={require('../assets/foodanalysis2.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#6617F5' : '#748c94',
                        marginBottom: 20,
                    }}
                    />
                   
                </View>
            ),
       }}/>
        <Tab.Screen 
        name="Blogs" 
        component={BlogNavigator}
        options={{
            // tabBarIcon: ({color,size}) => <Icon path={mdiAccount} size={size} color={color}/>
            tabBarVisible: false,
        }}/>
        <Tab.Screen 
        name="ScanScreen" 
        component={ScanNavigator}
        options={({navigation}) => ({
                tabBarIcon: ({focused}) => (
                <View style={styles.screenContainer}>
                    
                    <Text style={{color: focused ? '#6617F5' : '#748c94', fontSize: 12}}>DMP</Text>
                </View>
            ),
            tabBarButton: () => (
                <TouchableOpacity
                style={{
                    top: -15,
                    justifyContent: "center",
                    alignItems: 'center',
                    ...styles.shadow
                }}
                onPress= {() => {navigation.navigate("ScanScreen")}}
                >
                    <View style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        backgroundColor: '#6617F5'
                    }}>
                        <Image 
                    source={require('../assets/sacnqr-edited.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        padding: 20,
                        alignSelf: 'center',
                        display: "flex",
                        flex: 1,
                        alignItems: 'center'
                        
                    }}
                    />
                    </View>
                </TouchableOpacity>
            )
            
        })}/>

        <Tab.Screen 
        name="Orders" 
        component={OrdersScreen}
        options={{
            // tabBarIcon: ({color,size}) => <Icon path={mdiAccount} size={size} color={color}/>
        }}/> 
         
         <Tab.Screen 
        name="MainScreen1" 
        component={MainScreen}
        options={{
            // tabBarIcon: ({color,size}) => <Icon name="rocket" size={30} color="#900" />
        }}/>
    </Tab.Navigator>
)

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