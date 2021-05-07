import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
// import { AsyncStorage } from 'react-native';

  export const authenticator = createAsyncThunk(
    'customer/signin',
    async (values, thunkAPI) => {
        console.log('Email:',values.email);
        console.log(values.password);
        //Instead of get restaurants we will authenticate here
        //We can have axios calls in one file like we did.
        const data = await axios({
            method: 'POST',
            url: 'http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/customer/signin',
            data:{
                email: values.email,
                password: values.password,
            }   
          }).then(async (response)=>{
            // console.log(response.data);
            // localStorage.setItem("authToken", response.data.accessToken)
            if(response.status === 200){
            console.log('Ho gya')
            console.log("Access Token::",response.data.accessToken);
            // await AsyncStorage.setItem("me", JSON.stringify(response.data.accessToken))
            
            }
            else{
                console.log("Bhaduhjad1")
                return thunkAPI.rejectWithValue("Bhaaad mai jaa");
            }
            console.log(response);
            return(response);

        }).catch((err)=>{
            console.log("Error: ", err);
            return thunkAPI.rejectWithValue("Bhaaad mai jaa");
            
          })      
          if(data.status === 200){
              return (data);
          }
          else{
            return thunkAPI.rejectWithValue("Bhaaad mai jaa");
          }
    }
)

    export const getCustomer = createAsyncThunk(
      'customer/get', 
      async (values, {rejectWithValue}) => {
        console.log("Token getCustomer: ", values);
        try{
          const data = await axios({
            method: 'GET',
            url: 'http://Foodpalbackend-env.eba-nevmpxfx.ap-south-1.elasticbeanstalk.com/customer/get',
            headers: {
              "Content-Type": "application/json",
              "x-access-token": values
            }
          })
          return data;
        }
        catch(err){
          return rejectWithValue(err);
        }
      }
    )
  const signinSlice = createSlice({
      name: 'auth',
      initialState: {
          isLoggedIn: false,
          me: {},
          checked: false,
          token:'',
          id: '',
          customerName: '',
          phone_number: '',
          email: '',
          city: '',
      },
      reducers: {
          saveme: (state, action) => {
            //This accepts me object and saves it to state
            console.log(action.payload);
            state.token=action.payload;
          },
          authenticate: (state, action) =>{
              //This sets isLoggedin to turu
              console.log("Authenticate called")
              state.isLoggedIn=true
          },
          unAuthenticate: (state, action) => {
            //This sets isLoggedIn to Falase
            console.log("Bulaya gaya");
            state.isLoggedIn=false;
            AsyncStorage.removeItem('me');
          },

      },
      extraReducers:{
          [authenticator.fulfilled]: (state, {payload}) => {
              console.log("payload: ",payload.data);
              state.id = payload.data.customer["_id"];
              state.isLoggedIn = true;
              state.me = payload;
              state.token=payload.data.accessToken;
              // console.log(state.me.data.customer['name']);
              state.customerName = payload.data.customer['name']; 
              state.phone_number = payload.data.customer['phone_number'];
              state.email = payload.data.customer['email'];
              AsyncStorage.setItem('me', payload.data.accessToken);    
          },
          [authenticator.rejected]: (state, action) => {
            //   console.log(action);
              console.log("Rejected cause that's what you deserve")
          },
          [authenticator.pending]: (state, action) =>{
            console.log('Authentication in process');
          },
          [getCustomer.fulfilled]: (state, {payload}) => {
            console.log(payload.data["_id"]);
            state.id = payload.data["_id"];
            state.email = payload.data["email"];
            state.customerName = payload.data["name"];
            state.isLoggedIn = true;
            state.phone_number = payload.data["phone_number"]
          }
      }
})



export const {saveme, authenticate, unAuthenticate} = signinSlice.actions;
export default signinSlice.reducer;
// export const selectLogged = state;