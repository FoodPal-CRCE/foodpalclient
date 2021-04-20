import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
import firebase from 'firebase';
const db = firebase.firestore();
export const uploadDoc = createAsyncThunk(
    'blog/upload',
    async (values, {rejectedWithValue}) => {
        console.log(values);
        console.log(values.dish);
        try{
            db.collection(values.dish).doc().set(values);
        }catch(err){
            return rejectedWithValue(err);
        }

    }
)
const blogSlice = createSlice({
    name: "Blogs",
    initialState: {
        data: '',
    }, 
    reducers: {

    },
    extraReducers: {
        [uploadDoc.fulfilled]: (state, action) => {
            console.log(action)
        }   
    }
})

export default blogSlice.reducer;