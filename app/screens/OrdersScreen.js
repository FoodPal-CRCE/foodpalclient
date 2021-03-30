import React from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';

import OrderCard from './../components/orders/OrderCard';
import colors from '../config/colors';

const orders = [
  {
    _id: '1',
    userId: '22',
    restaurantId: 'asasdadw',
    createdAt: '10:30',
    items: [
      {
        _id: 1,
        name: 'Paneer Chilli',
        quantity: 1,
        price: 200,
        isPreparing: true,
        isPrepared: true,
        isServed: true,
      },
      {
        _id: 2,
        name: 'Fried Rice',
        quantity: 1,
        price: 200,
        isPreparing: true,
        isPrepared: true,
        isServed: true,
      },
      {
        _id: 3,
        name: 'Spring Roll',
        quantity: 2,
        price: 200,
        isPreparing: true,
        isPrepared: true,
        isServed: true,
      },
    ],
    tableNumber: 2,
    total: 600,
  },
  {
    _id: '2',
    userId: '22',
    restaurantId: 'asasdadw',
    createdAt: '10:40',
    items: [
      {
        _id: 1,
        name: 'Roti',
        quantity: 2,
        price: 25,
        isPreparing: true,
        isPrepared: true,
        isServed: true,
      },
      {
        _id: 2,
        name: 'Dal',
        quantity: 1,
        price: 120,
        isPreparing: true,
        isPrepared: true,
        isServed: true,
      },
    ],
    tableNumber: 2,
    total: 145,
  },
  {
    _id: '3',
    userId: '22',
    restaurantId: 'asasdadw',
    createdAt: '10:45',
    items: [
      {
        _id: 1,
        name: 'Water Bottle',
        quantity: 1,
        price: 20,
        isPreparing: true,
        isPrepared: true,
        isServed: true,
      },
    ],
    tableNumber: 2,
    total: 20,
  },
  {
    _id: '4',
    userId: '22',
    restaurantId: 'asasdadw',
    createdAt: '10:50',
    items: [
      {
        _id: 1,
        name: 'Tomato Soup',
        quantity: 1,
        price: 240,
        isPreparing: true,
        isPrepared: false,
        isServed: false,
      },
      {
        _id: 2,
        name: 'Bread',
        quantity: 1,
        price: 20,
        isPreparing: true,
        isPrepared: false,
        isServed: false,
      },
    ],
    tableNumber: 2,
    total: 260,
  },
  {
    _id: '5',
    userId: '22',
    restaurantId: 'asasdadw',
    createdAt: '11:00',
    items: [
      {
        _id: 1,
        name: 'Ice Cream',
        quantity: 1,
        price: 80,
        isPreparing: true,
        isPrepared: true,
        isServed: true,
      },
    ],
    tableNumber: 2,
    total: 80,
  },
];

function OrdersScreen(props) {
  return (
    <ScrollView>
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
      {/*Button Make Payment
        razorpay
      */}
      {/*Button Order More (Reducer) clear navigate menu screen*/}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default OrdersScreen;
