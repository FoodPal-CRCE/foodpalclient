import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import Text from './Text';
import colors from '../config/colors';

function CartItem({name, quantity, price, image}) {
  return (
    <TouchableHighlight underlayColor={colors.light}>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={{uri: image}} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.quantity} numberOfLines={2}>
            X {quantity}
          </Text>
        </View>
        <Text style={styles.price}>₹{price * quantity}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  quantity: {
    color: colors.medium,
  },
  name: {
    fontWeight: '500',
  },
  price: {
    color: colors.dark,
    right: 10,
  },
});

export default CartItem;
