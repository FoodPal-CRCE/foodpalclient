import React, {useEffect} from 'react'
import { View } from 'react-native'
import { Appbar, Button, Title } from 'react-native-paper';
import MenuCard from "../components/menu/MenuCard"
import MenuList from "../components/menu/MenuList"
import MenuSection from "../components/menu/MenuSection"
import { getRestaurant } from '../reducers/restaurantSlice';

import { useDispatch, useSelector } from 'react-redux';

export default function MenuScreen({navigation, route}) {
    const data = route.params;
    const dispatch = useDispatch();
    var mee = useSelector((state) => state.signin.token);
     var doc={
         token: mee,
         id: data.id
     };
    useEffect(()=>{
        dispatch(getRestaurant(doc));
    },[dispatch])
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction />
                <Appbar.Content title="Our Menu" subtitle="Scanned restaurant's menu" />

            </Appbar.Header>

            <MenuList />
            <Button onPress={() => navigation.navigate("CartScreen", {"restId": data.id, "tableNumber": data.tablenumber})}>View Cart</Button>
        </View>
    )
}
