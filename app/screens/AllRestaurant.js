import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getAllRestaurants } from '../reducers/restaurantSlice';

import { useDispatch, useSelector } from 'react-redux';
function AllRestaurant() {
    
    const dispatch = useDispatch();
    var mee = useSelector((state) => state.signin.token);
     
    useEffect(()=>{
        dispatch(getAllRestaurants(mee));
    },[dispatch])
    return (
        <View>
            <Text>All Restaurant Screen</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
      },
})

export default AllRestaurant;