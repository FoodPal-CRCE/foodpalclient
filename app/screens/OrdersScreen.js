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