import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
// import { AsyncStorage } from 'react-native';

  export const authenticator = createAsyncThunk(
    'restaurant/signin',
    async (values, thunkAPI) => {
        console.log('Email:',values.email);
        console.log(values.password);
        //Instead of get restaurants we will authenticate here
        //We can have axios calls in one file like we did.
        const data = await axios({
            method: 'POST',
            url: 'http://192.168.1.37:5000/customer/signin',
            data:{
                email: values.email,
                password: values.password,
            }   
          }).then(async (response)=>{
            // console.log(response.data);
            // localStorage.setItem("authToken", response.data.accessToken)
            if(response.status === 200){
            // localStorage.setItem("me", JSON.stringify(response.data))
            // console.log(response.data);
            //Async store krenge idhr
            console.log('Ho gya')
            console.log("Access Token::",response.data.accessToken);
            await AsyncStorage.setItem("me", JSON.stringify(response.data.accessToken))
            
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


  const signinSlice = createSlice({
      name: 'auth',
      initialState: {
          isLoggedIn: false,
          me: {},
          checked: false,
          token:'',
      },
      reducers: {
          saveme: (state, action) => {
            //This accepts me object and saves it to state
            console.log(action.payload.data);
            state.me=action.payload;
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
          }
      },
      extraReducers:{
          [authenticator.fulfilled]: (state, {payload}) => {
              console.log("payload: ",payload.data);
              
              state.isLoggedIn = true;
              state.me = payload;
              state.token=payload.data.accessToken;
              
          },
          [authenticator.rejected]: (state, action) => {
            //   console.log(action);
              console.log("Rejected cause that's what you deserve")
          },
          [authenticator.pending]: (state, action) =>{
            console.log('Authentication in process');
          }
      }
})



export const {saveme, authenticate, unAuthenticate} = signinSlice.actions;
export default signinSlice.reducer;
// export const selectLogged = state;