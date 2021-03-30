import React, { useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, removeSingleItem } from '../../reducers/cartSlice';
import MenuCard from "./MenuCard"
export default function MenuSection({ item, onChange }) {
    //2 Variables -> show button, show counter 
    
    var showButton = true;
    var showCounter = true;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems);
    const checkQty = (id) => {
        console.log(id);
        console.log(cart)
        console.log(cart[id]["quantity"]);
    }
    const renderItem = ({ item }) => (
        <MenuCard showButton={showButton} showCounter={showCounter} onChange={onChange} addCartHandler={addCartHandler} title={item.name} price={item.price} id={item._id} />
    );
    function onChange(count, type,payload, payload2, payload3) {
        var doc = {
            _id: payload,
            price:type ,
            name: count
        }
        
        if(payload3==='-'){
            dispatch(removeSingleItem({_id: payload}));
            // checkqty(payload);   
            // console.log(cart);
            // console.log(cart[id]["quantity"]);     
            
        }      
        else{
            dispatch(addItem(doc));
        }
    }
    function addCartHandler(payload) {
        console.log(payload)
        console.log("Add cart called!")
        //Add Item
        dispatch(addItem(payload))
        // checkQty(payload._id);
        // console.log(cart.id);
    }
    //{_id: this.props.id.toString(), name: this.props.title, price: this.props.price}

    // _id, name, price'
    
    return (
        <View>
            <Title>{item.name}</Title>
            <FlatList

                data={item.items}
                keyExtractor={item => item._id.toString()}
                renderItem={renderItem}
            />

        </View>
    )
}
