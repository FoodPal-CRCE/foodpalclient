import React from 'react';
import {StyleSheet, View, Text ,FlatList} from 'react-native';

import OrderItem from './../components/orders/OrderItem';
import ListItemSeparator from './../components/ListItemSeparator';
import { Appbar } from 'react-native-paper';

function OrderDetailsScreen({route}) {
  const data = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Order Status" subtitle={`See what's cooking @ ${data.item.restaurantName}`} />
      </Appbar.Header>
      
      <FlatList
        data={data.item.items}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(items) => items._id.toString()}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default OrderDetailsScreen;
