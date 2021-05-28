import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentOrder, updateIsPaid } from '../reducers/orderSlice';
import OrderCard from '../components/orders/OrderCard'
import RazorpayCheckout from "react-native-razorpay";
import {Button, Snackbar, Appbar } from 'react-native-paper';
import { clear } from '../reducers/cartSlice';

function RecentOrders({navigation}) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.signin.token)
    const recentOrders = useSelector((state) => state.order.recentOrders)
    console.log(recentOrders);
    const caller = () => {
        dispatch(getRecentOrder(token));
    }
    const [showsnackbar, setShowSnackbar] = useState(false);
    const customerName = useSelector((state) => state.signin.customerName);
    const name = useSelector((state) => state.restaurant.restaurantName);
    const mee = useSelector((state) => state.signin.token);
    const phone_number = useSelector((state) => state.signin.phone_number)
    const email = useSelector((state) => state.signin.email);
    const [order, setOrder] = useState('');
    const total = useSelector((state) => state.cart.totalPrice);
    const onDismissSnackBar = () => setShowSnackbar(false);
    const order_id = useSelector((state) => state.placeorder.order_id)
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
        //Here we will send data to the slice 
        const doc = {
          token: mee,
          order_id: order_id
        }
        dispatch(updateIsPaid(doc));
        setShowSnackbar(true);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
        console.log(error);
      });
      
    }

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
      navigation.navigate("MainScreen");
      console.log("Yahan Se nikal")
    }

    useEffect(() => {
        caller();
    }, [])
    return (
        <View style={{height: "100%"}}>
          <Appbar.Header>
          <Appbar.Content title="Your Order" subtitle="Order is now placed" />
          </Appbar.Header>
      <FlatList
        data={recentOrders}
        keyExtractor={(orders) => orders._id.toString()}
        renderItem={({item}) => (
          <OrderCard
            total={item.total}
            time={item.restaurantName}
            tableNumber={item.tableNumber}
            item={item}
            navigation={navigation}
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
export default RecentOrders; 