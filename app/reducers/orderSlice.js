import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
  export const getRecentOrder = createAsyncThunk(
      'orders/getRecentOrders',
      async (value, {rejectWithValue}) => {
          const url = 'http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/orders/customer/recent';
          try{
            const data = await axios({
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": value
                },
                url: url
            })
            return data;
          }
          catch(err){
              return rejectWithValue(err);
          }

      }
  )
  export const updateIsPaid = createAsyncThunk(
      'orders/updateIsPaid',
      async (value, {rejectWithValue}) => {
          console.log(value);
          const url = `http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/orders/customer/paid/${value.order_id}`;
          try{
              const data = await axios({
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": value.token
                },
                url: url
              })
          }
          catch(err){
              return rejectWithValue(err);
          }
      }
  )
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
        recentOrders: null
      },
      reducers:{

      },
      extraReducers:{
        [getOrder.fulfilled]: (state, action) => {
            // console.log("tudgymn: ", action.payload.data);
            state.orders = action.payload.data;
        },
        [getRecentOrder.fulfilled]: (state, action) => {
            console.log(action.payload.data);
            state.recentOrders = action.payload.data;
        }
      }

  })

  export default orderSlice.reducer;