import React, {useState, useEffect} from 'react';
import { View, Text , FlatList} from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {placeOrder} from '../reducers/placeOrderSlice';
import CartItem from '../components/CartItem';
function CartScreen({route}) {
    var initial = route.params
    var [cartData, setcarData] = useState(useSelector((state) => state.cart.cartItems));
    console.log("CartData: ",cartData);
    
    var mee = useSelector((state) => state.signin.token);
    const dispatch = useDispatch();
    var finalDoc;
    const [items, setItems] = useState([]);
    const [ren, setRen] = useState(false);
    const dataMake = () => {
        var index=0;
       for(var data in cartData){
            // console.log(index,": ",cartData[data].name)
            // index++;
           
            var doc = {
                itemName:  cartData[data].name,
                itemId: cartData[data].id,
                quantity: cartData[data].quantity,
                price: cartData[data].price
            }
            console.log(doc);
            console.log(initial);
            items[index] = doc;
            index++; 
            setRen(true);
        }
        console.log(items);
        finalDoc = {
            restaurantId: initial.restId,
            tableNumber: initial.tableNumber,
            items: items
        }
        console.log("Final Document: ", finalDoc);
        // dispatch(placeOrder({doc: finalDoc, mee: mee}));
    }
    useEffect(()=>{
        dataMake();
        console.log("Cart mai:",cartData);
        console.log("Array:  ", items)
    })
    

    const [image, setImage] = useState({
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
      });


    return (
        <View>
            <Text style={{textAlign: "center", margin: 30, fontSize: 24}}>Cart Screen</Text>
            
            {ren && <FlatList
                data={items}
                keyExtractor={(items) => items.itemId.toString()}
                renderItem={({item}) => (
                <CartItem 
                name={item.itemName} 
                quantity={item.quantity} 
                price={item.price} 
                image={image.uri}/>)}
            />}
                
            <Button onPress={()=> dispatch(placeOrder({doc: finalDoc, mee: mee}))}>Place order</Button>
        </View>
    );
}

export default CartScreen;