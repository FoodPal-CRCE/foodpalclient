import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import OrderItem from './../components/orders/OrderItem';
import ListItemSeparator from './../components/ListItemSeparator';

function OrderDetailsScreen({order}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={order.items}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(items) => items._id.toString()}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OrderDetailsScreen;
