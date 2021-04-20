import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import {Button, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from '../components/orders/OrderCard'
import { clear } from '../reducers/cartSlice';
import RazorpayCheckout from "react-native-razorpay";
import axios from 'axios';
import {getOrder} from '../reducers/orderSlice'
function OrdersScreen({navigation}) {
  // const orders = [
  //   {
  //     _id: '1',
  //     userId: '22',
  //     restaurantId: 'asasdadw',
  //     createdAt: '10:30',
  //     items: [
  //       {
  //         _id: 1,
  //         name: 'Paneer Chilli',
  //         quantity: 1,
  //         price: 200,
  //         isPreparing: true,
  //         isPrepared: true,
  //         isServed: true,
  //       },
  //       {
  //         _id: 2,
  //         name: 'Fried Rice',
  //         quantity: 1,
  //         price: 200,
  //         isPreparing: true,
  //         isPrepared: true,
  //         isServed: true,
  //       },
  //       {
  //         _id: 3,
  //         name: 'Spring Roll',
  //         quantity: 2,
  //         price: 200,
  //         isPreparing: true,
  //         isPrepared: true,
  //         isServed: true,
  //       },
  //     ],
  //     tableNumber: 2,
  //     total: 600,
  //   },
  //   {
  //     _id: '2',
  //     userId: '22',
  //     restaurantId: 'asasdadw',
  //     createdAt: '10:40',
  //     items: [
  //       {
  //         _id: 1,
  //         name: 'Roti',
  //         quantity: 2,
  //         price: 25,
  //         isPreparing: true,
  //         isPrepared: true,
  //         isServed: true,
  //       },
  //       {
  //         _id: 2,
  //         name: 'Dal',
  //         quantity: 1,
  //         price: 120,
  //         isPreparing: true,
  //         isPrepared: true,
  //         isServed: true,
  //       },
  //     ],
  //     tableNumber: 2,
  //     total: 145,
  //   },
  //   {
  //     _id: '3',
  //     userId: '22',
  //     restaurantId: 'asasdadw',
  //     createdAt: '10:45',
  //     items: [
  //       {
  //         _id: 1,
  //         name: 'Water Bottle',
  //         quantity: 1,
  //         price: 20,
  //         isPreparing: true,
  //         isPrepared: true,
  //         isServed: true,
  //       },
  //     ],
  //     tableNumber: 2,
  //     total: 20,
  //   },
  //   {
  //     _id: '4',
  //     userId: '22',
  //     restaurantId: 'asasdadw',
  //     createdAt: '10:50',
  //     items: [
  //       {
  //         _id: 1,
  //         name: 'Tomato Soup',
  //         quantity: 1,
  //         price: 240,
  //         isPreparing: true,
  //         isPrepared: false,
  //         isServed: false,
  //       },
  //       {
  //         _id: 2,
  //         name: 'Bread',
  //         quantity: 1,
  //         price: 20,
  //         isPreparing: true,
  //         isPrepared: false,
  //         isServed: false,
  //       },
  //     ],
  //     tableNumber: 2,
  //     total: 260,
  //   },
  //   {
  //     _id: '5',
  //     userId: '22',
  //     restaurantId: 'asasdadw',
  //     createdAt: '11:00',
  //     items: [
  //       {
  //         _id: 1,
  //         name: 'Ice Cream',
  //         quantity: 1,
  //         price: 80,
  //         isPreparing: true,
  //         isPrepared: true,
  //         isServed: true,
  //       },
  //     ],
  //     tableNumber: 2,
  //     total: 80,
  //   },
  // ];
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
  const handlePayment = () => {
    var options = {
      description: 'Secure Payment to FoodPal',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_3H6qUplmbWeOGd',
      amount: total+'00',
      name: name,
      order_id: order,
      prefill: {
        email: email,
        contact: phone_number,
        name: customerName
      },
      theme: {color: '#6716F7'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      // alert(`Success: ${data.razorpay_payment_id}`);
      //setRen(true);
      setShowSnackbar(true);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
      console.log(error);
    });
    
  }
  const caller = () => {
    dispatch(getOrder(mee));
  }
  useEffect(()=>{
    console.log(mee);
    caller();
  }, [])
  const handleOrdermore= () => {
    dispatch(clear());
    // navigation.navigate('MenuScreen');
    navigation.reset({
      routes: [
        {name: 'MenuScreen'}
      ],
      
    })
  }
  const handleOk = async () => {
    dispatch(await clear());
    
  }
  return (
    <View>
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
          />
        )}
      />
      <View>
          <Button
            icon="credit-card-marker-outline"
            mode="contained"
            onPress={() => handlePayment()}
            style={styles.pay}>
            Pay Now
          </Button>
          <Button
            icon="plus-circle-outline"
            mode="contained"
            onPress={() => handleOrdermore()}
            style={styles.orderMore}>
            Order More
          </Button>
      </View>
      <Snackbar
        visible={showsnackbar}
        onDismiss={onDismissSnackBar}
        duration={5000}
        action={{
          label: 'Ok',
          onPress: async() => {
            await handleOk()
            navigation.reset({
              routes: [
                {name: 'MainScreen'}
              ],
              
            })
          },
        }}>
        Payment Successfully Completed
      </Snackbar>
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