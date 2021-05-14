import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import {Button, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from '../components/orders/OrderCard'
import { clear } from '../reducers/cartSlice';

import axios from 'axios';
import {getOrder, updateIsPaid} from '../reducers/orderSlice'
function OrdersScreen({navigation}) {
  const orders = useSelector((state) => state.order.orders);
  const name = useSelector((state) => state.restaurant.restaurantName);
  const email = useSelector((state) => state.signin.email);
  const phone_number = useSelector((state) => state.signin.phone_number)
  // const custName = useSelector((state) => state.signin.me.data.customer['name'])
  const [order, setOrder] = useState('');
  const [showsnackbar, setShowSnackbar] = useState(false);
  const dispatch = useDispatch();
  const customerName = useSelector((state) => state.signin.customerName);
  const total = useSelector((state) => state.cart.totalPrice);
  const onDismissSnackBar = () => setShowSnackbar(false);
  var mee = useSelector((state) => state.signin.token);

  const caller = () => {
    dispatch(getOrder(mee));
  }
  useEffect(()=>{
    console.log(mee);
    caller();
  }, [])
  
  
  return (
    <View style={{height: "100%"}}>
      <Text style={{alignSelf:"center", margin: 20, fontSize: 24}}>Orders Screen</Text>
      <FlatList
        data={orders}
        keyExtractor={(orders) => orders._id.toString()}
        renderItem={({item}) => (
          <OrderCard
            total={item.total}
            time={item.createdAt}
            tableNumber={item.tableNumber}
            item={item}
            navigation={navigation}
          />
        )}
      />
      
      
    </View>
  );
}
const styles = StyleSheet.create({
  pay: {
    bottom: 0,
    right: 0,
    width: '50%',
    margin: 50,
    marginBottom: 20,
    alignSelf: "center"
  },
  orderMore: {
    bottom: 0,
    left: 0,
    width: '50%',
    alignSelf: "center",
    marginBottom: 20

  },
});
export default OrdersScreen;