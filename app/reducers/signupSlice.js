import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
// import { AsyncStorage } from 'react-native';

  export const signup = createAsyncThunk(
    'restaurant/signin',
    async (values, thunkAPI) => {
        console.log('Email:',values);
        
        //Instead of get restaurants we will authenticate here
        //We can have axios calls in one file like we did.
        const data = await axios({
            method: 'POST',
            url: 'http://192.168.1.37:5000/customer/signup',
            data:{
                email: values.email,
                password: values.password,
                name: values.name,
                phone_number: values.phone_number,
                city: values.city
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


  const signupSlice = createSlice({
      name: 'auth',
      initialState: {
          signedUp: false
      },
      reducers: {
        
      },
      extraReducers:{
          [signup.fulfilled]: (state, {payload}) => {
              state.signedUp=true;
              
          },
          [signup.rejected]: (state, action) => {
            //   console.log(action);
              console.log("Rejected cause that's what you deserve")
          },
          [signup.pending]: (state, action) =>{
            console.log('Authentication in process');
          }
      }
})



// export const {saveme, authenticate, unAuthenticate} = signupSlice.actions;
export default signupSlice.reducer;
// export const selectLogged = state;