import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'

  const scanSlice = createSlice({
    name: 'auth',
    initialState: {
        id: '',
        tablenumber: '',
    },
    reducers: {
        saveRest: (state, action) => {
            const {id, tablenumber} = action.payload;
            state.id = id;
            state.tablenumber = tablenumber;
        },
        deleteRest: (state, action) => {
            state.id= '';
            state.tablenumber = '';
        }
    },
})



export const {saveRest, deleteRest} = scanSlice.actions;
export default scanSlice.reducer;