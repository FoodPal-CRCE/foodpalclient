import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getRestaurant } from '../reducers/restaurantSlice';

import { useDispatch, useSelector } from 'react-redux';
function RestaurantScreen({route}) {
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
        <View>
            <Text>Restaurant Order Screen</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
      },
})

export default RestaurantScreen;