import React, {useEffect} from 'react'
import { View, ScrollView } from 'react-native'
import { Appbar, Button, Title } from 'react-native-paper';
import MenuCard from "../components/menu/MenuCard"
import MenuList from "../components/menu/MenuList"
import MenuSection from "../components/menu/MenuSection"
import { getRestaurant } from '../reducers/restaurantSlice';

import { useDispatch, useSelector } from 'react-redux';

export default function MenuScreen({navigation, route}) {
    
    const dispatch = useDispatch();
    var id = useSelector((state) => state.scan.id); 
    var mee = useSelector((state) => state.signin.token);
     var doc={
         token: mee,
         id: id
     };
    useEffect(()=>{
        dispatch(getRestaurant(doc));
    },[dispatch])
    return (
        <View>
        <Appbar.Header>
                <Appbar.BackAction/>
                <Appbar.Content title="Our Menu" subtitle="Scanned restaurant's menu" />

            </Appbar.Header>
        
        <ScrollView>
           

            <MenuList />
            <Button style={{margin: '20%'}} mode="contained" onPress={() => navigation.navigate("CartScreen")} style={{marginBottom: "20%"}}>View Cart</Button>
        </ScrollView>
        </View>
    )
}
