import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {placeOrder} from '../reducers/placeOrderSlice';
import CartItem from '../components/CartItem';
import colors from '../config/colors';
function CartScreen({navigation}) {
  var id = useSelector((state) => state.scan.id);
  var tableNumber = useSelector((state) => state.scan.tablenumber);
  var [cartData, setcarData] = useState(
    useSelector((state) => state.cart.cartItems),
  );
  var grandTotal = useSelector((state) => state.cart.totalPrice);
  console.log('CartData: ', cartData);
  const id_cust = useSelector((state) => state.signin.id);
  console.log('ID Customer: ', id_cust);
  var mee = useSelector((state) => state.signin.token);
  const dispatch = useDispatch();
  var finalDoc;
  var total = useSelector((state) => state.cart.localTotal);
  const [items, setItems] = useState([]);
  const [ren, setRen] = useState(false);
  const dataMake = () => {
    var index = 0;
    for (var data in cartData) {
      // console.log(index,": ",cartData[data].name)
      // index++;

      var doc = {
        itemName: cartData[data].name,
        itemId: cartData[data].id,
        quantity: cartData[data].quantity,
        price: cartData[data].price,
      };
      console.log(doc);
      items[index] = doc;
      index++;
      setRen(true);
    }
    console.log(items);
    finalDoc = {
      restaurantId: id,
      tableNumber: tableNumber,
      items: items,
    };
    console.log('Final Document: ', finalDoc);
  };
  useEffect(() => {
    dataMake();
    console.log('Cart mai:', cartData);
    console.log('Array:  ', items);
  });
  const handleButton = () => {
    // dispatch(placeOrder({doc: finalDoc, mee: mee}))
    //Uncomment this.
    navigation.navigate('OrdersScreen');
  }
  const [image, setImage] = useState({
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
  });

  return (
    <ScrollView>
      <Text style={{textAlign: 'center', margin: 30, fontSize: 24}}>
        Cart Screen
      </Text>

      {ren && (
        <FlatList
          data={items}
          keyExtractor={(items) => items.itemId.toString()}
          renderItem={({item}) => (
            <CartItem
              name={item.itemName}
              quantity={item.quantity}
              price={item.price}
              image={image.uri}
            />
          )}
        />
      )}
<View style={styles.viewStyle}>
      {ren && (
    <Card style={styles.cardStyle}>
        <Card.Content>
        <Title>Total:    ₹ {total}</Title>

        </Card.Content>
    </Card>
      )}
      {ren && (
    <Card style={styles.cardStyle}>
        <Card.Content>
        <Title>Grand Total:    ₹ {grandTotal}</Title>

        </Card.Content>
    </Card>
      )}

      <Button
        icon="shopping"
        mode="contained"
        style={styles.placeOrder}
        onPress={() =>handleButton()}>
        <Text style={{fontSize: 20, padding: 10}}>Place order</Text>
      </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  totalContainer: {
    backgroundColor: colors.blue,
    borderRadius: 5,
    height: '15%',
    width: '20%',
    margin: 20,
  },
  total: {
    color: colors.white,
    justifyContent: 'center',
  },
  placeOrder: {
    alignContent: 'center',
    bottom: 0,
    width: '80%',
    height: "auto",
    alignSelf: "center",
    borderRadius: 30

  },
  cardStyle:{
      margin: 50,
      marginTop: 20,
      bottom: 0, 
      backgroundColor: colors.primary, 
      width: "100%", 
      alignSelf: "center", 
      alignItems: "center",
      borderRadius: 10
    },
    viewStyle:{
        bottom: 0,
        // marginTop: "30%",
        marginBottom: "10%",
        margin: 50
    }
});

export default CartScreen;