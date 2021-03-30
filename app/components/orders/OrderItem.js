import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import colors from '../../config/colors';
import Text from '../Text';
import order_item from '../../assets/order_item.png';
const getStatus = (item) => {
  if (item.isServed) return 'Served';
  if (item.isPrepared) return 'Prepared';
  if (item.isPreparing) return 'Preparing';
};

function OrderItem({item}) {
  return (
    <View style={styles.container}>
      <Image source={order_item} style={styles.image} />
      <View style={styles.data}>
        <Title>{item.name}</Title>
        <Paragraph>{getStatus(item)}</Paragraph>
        <Text>{item.quantity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.light,

    borderRadius: 25,
    margin: 15,
  },
  data: {
    marginLeft: 120,
    marginBottom: 50,
    top: -70,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default OrderItem;
