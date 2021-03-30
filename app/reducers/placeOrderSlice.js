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
            //Loader = false;
            //Toast = true <Button title="Track Your Order"/>
        },
        [placeOrder.rejected]: (state, action) => {
            console.log("Rejected")
            //Loader = false;
            //Red mai alert Saying order couldn't be placed...
        },
        [placeOrder.pending]: (state, action) => {
            // Loader = true {loader && <ProgressBar />}
        }
      }

  })

  export default placeOrderSlice.reducer;