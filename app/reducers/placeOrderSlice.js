import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
export const placeOrder = createAsyncThunk(
    'cart/placeorder',
    async(value, {rejectWithValue}) => {
            console.log(value);
            const url = "http://192.168.1.39:5000/orders/add";
            try{
                const data = await axios({
                    method: 'POST',
                    url: url,
                    headers: {
                        "x-access-token": value.mee
                    },
                    data: value.doc
                });
                console.log("Orders Done");
                return data;
            }
            catch(err){
                console.log(err);
                return rejectWithValue(err);
            }

        }
    )
  const placeOrderSlice = createSlice({
      name: "Restaurant",
      initialState: {
        placed: false,
      },
      reducers:{

      },
      extraReducers:{
        [placeOrder.fulfilled]: (state, action) => {
            console.log("FInalllyy Found you");
        },
        [placeOrder.rejected]: (state, action) => {
            console.log("Rejected")
        }
      }

  })

  export default placeOrderSlice.reducer;