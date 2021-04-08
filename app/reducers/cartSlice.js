import {
    createSlice,
    createAsyncThunk,
    // createEntityAdapter,
} from '@reduxjs/toolkit'
// import axios from 'axios';


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: {
            //structure
            // "123": {
            //     "name": "Chicken Tikka",
            //     "quantity": 1,
            //     "price": 200,
            //     "id": 123
            // }


        }, //key is id of item and value is the item 
        error: null,
        totalPrice: 0,
        localTotal: 0,
    },
    reducers: {
        addItem(state, action) {
            console.log("Add Item Called");
            //should get id of item i.e items._id
            //should get name, price
            const { _id, name, price } = action.payload;
            //step 1
            //check if item of same type already added to cart
            if (state.cartItems.hasOwnProperty(_id)) {
                //update cart and increase the quantity
                //this means update an object 
                state.cartItems[_id]["quantity"] += 1
                console.log("item updated!");
                
            }
            else {
                //add new key value pair to cart
                state.cartItems[_id] = {
                    "name": name,
                    "price": price,
                    "quantity": 1,
                    "id": _id,
                }
            }
            console.log(state.cartItems);
            state.totalPrice += price;
            console.log(state.totalPrice);
            state.localTotal += price;
        },
        removeItem(state, action) {
            const { _id } = action.payload;
            delete state.cartItems[_id]; 0
            console.log(state.cartItems);
            state.totalPrice -= price;
            console.log(state.totalPrice);
            state.localTotal -= price;
        },
        clear(state, action) {
            for (var item in state.cartItems) delete state.cartItems[item];
            console.log(state.cartItems);
            state.localTotal = 0;
            state.totalPrice = 0;
        },
        removeSingleItem(state, action) {
            const { _id } = action.payload;
            if (!state.cartItems.hasOwnProperty(_id)) { //item not present
                return;
            }
            if (state.cartItems[_id]["quantity"] > 1) {
                state.cartItems[_id]["quantity"] -= 1
            }
            else {
                delete state.cartItems[_id];
            }
            console.log(state.cartItems);
        }
        //other actions here.....see my flutter cart.dart page for functions...turning into JS shouldnt  be tough
        //so this cart is accessible from any page...so immediate next page after menu on customer side is the cart page and place order button
        //loop through above cart and form the request needed to place order
        //fields other that cart items will be available such as restaurant id, customer id and table number
        //cart screen ui can be made using something similar to MenuCard.js....just modify it to have a remove from cart button
        //I'm sending JSfiddle code too so check that out as well
        //orders place hua then we're good
    }
});
export const { addItem, removeItem, clear, removeSingleItem } = cartSlice.actions;
export default cartSlice.reducer;