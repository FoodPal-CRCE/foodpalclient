import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../reducers/cartSlice'
import placeOrderSlice from '../reducers/placeOrderSlice'
import restaurantSlice from '../reducers/restaurantSlice'
import scanSlice from '../reducers/scanSlice'
import signinReducer from '../reducers/signinSlice'
import signupSlice from '../reducers/signupSlice'


export default configureStore({
  reducer: {
        signin: signinReducer,
        restaurant: restaurantSlice,
        signup: signupSlice,
        cart: cartSlice,
        placeorder: placeOrderSlice,
        scan: scanSlice
    },
  middleware:  (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: false,
  }),
})
