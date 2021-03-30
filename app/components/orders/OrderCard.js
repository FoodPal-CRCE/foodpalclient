import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Title, Paragraph, Button} from 'react-native-paper';

function OrderCard({time, total, tableNumber, item}) {
  return (
    <View style={styles.root}>
      <Image
        style={styles.cover}
        source={{
          uri: 'https://i.dlpng.com/static/png/6790259_preview.png',
        }}
      />
      <View style={styles.content}>
        <Title>{time}</Title>
        <Paragraph>Table: {tableNumber}</Paragraph>
        <Paragraph>Total: {total}</Paragraph>
        <View style={styles.actions}>
          <Button icon="chevron-triple-right" onPress={() => {}}>
            View
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 10,
    flexDirection: 'row',
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },
  cover: {
    width: 150,
    height: 150,
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  actions: {
    marginTop: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
  },
});

export default OrderCard;
