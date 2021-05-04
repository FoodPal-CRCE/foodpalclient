import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
  export const getAllRestaurants = createAsyncThunk(
      'restaurant/getAll',
      async(value, {rejectWithValue}) => {
          console.log("Inside Thunk");
          const url = "http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/restaurant/all";
          try{
            const data = await axios({
                method: "GET",
                url: url,
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": value
                },
            });
            console.log("All Restaurants: ", data);
            return data;
          }
          catch(err){
            return rejectWithValue(err);
          }
      }
  )
  export const getRestaurant = createAsyncThunk(
    'restaurant/get',
    async (value,{rejectWithValue}) => {
        console.log("Called Thunk");
        const url = 'http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/customer/get/restaurant/' + value.id;
        
        console.log("Token",value);
        try{
            const data = await axios({
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": value.token
                },
                url: url,
                data: {
                    id: value.id
                }
            });
            console.log("Restaurant Data:",data);
            return data;
    
        }   catch(err) {
            return rejectWithValue(err);
        }        
    }
  )

  const restaurantSlice = createSlice({
      name: "Restaurant",
      initialState: {
        restaurantData: {},
        status: "idle",
        error: null,
        refreshed: true,
        AllRestaurant: [],
        menu: [],
        restaurantName: '',
      },
      reducers:{

      },
      extraReducers:{
        [getRestaurant.pending]: (state, action) => {
            state.status = "loading";
        },
        [getRestaurant.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.restaurantData = action.payload;
            console.log(action.payload.data.menu);
            state.menu = action.payload.data.menu;
            state.restaurantName = action.payload.data.name;
            console.log('Restaurant Name:  ', state.restaurantName);
        },
        [getRestaurant.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
            console.log("failed");
            // console.log(action.error);
            // window.location.reload();
          },
          [getAllRestaurants.fulfilled]: (state, action) => {
            state.AllRestaurant.push(action);
            console.log(action);
          },
          [getAllRestaurants.rejected]: (state, action) => {
              console.log("Bhaag yahan se");
          }
      }

  })

  export default restaurantSlice.reducer;