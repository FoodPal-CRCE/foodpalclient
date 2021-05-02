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
            db.collection("Blogs").doc().set(values);
        }catch(err){
            return rejectedWithValue(err);
        }

    }
)
export const getBlogs = createAsyncThunk(
    'blog/get',
    async (values, {rejectedWithValue}) => {
        try{
            const arr = [];
            const data = await db.collection("Blogs").get();
            // console.log(data)
            return data;
        }catch(err){
            return rejectedWithValue(err);
        }
    }
)
const blogSlice = createSlice({
    name: "Blogs",
    initialState: {
        data: '',
        blogs: null,
    }, 
    reducers: {

    },
    extraReducers: {
        [uploadDoc.fulfilled]: (state, action) => {
            console.log(action)
        },
        [getBlogs.fulfilled]: (state, action) => {
            // console.log(action.payload);
            action.payload.forEach((doc) => {
                console.log(doc)
            })
        } 
    }
})

export default blogSlice.reducer;