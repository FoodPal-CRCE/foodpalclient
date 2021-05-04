import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
  
  export const getOrder = createAsyncThunk(
    'orders/get',
    async (value,{rejectWithValue}) => {
        console.log("Called Thunk");
        const url = 'http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/orders/customer' ;
        
        console.log("Token",value);
        try{
            const data = await axios({
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": value
                },
                url: url,
                
            });
            // console.log("Order Data:",data);
            return data;
    
        }   catch(err) {
            return rejectWithValue(err);
        }        
    }
  )

  const orderSlice = createSlice({
      name: "Orders",
      initialState: {
        orders: null,
      },
      reducers:{

      },
      extraReducers:{
        [getOrder.fulfilled]: (state, action) => {
            // console.log("tudgymn: ", action.payload.data);
            state.orders = action.payload.data;
        }
      }

  })

  export default orderSlice.reducer;