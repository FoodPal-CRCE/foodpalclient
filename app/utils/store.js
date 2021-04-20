import { configureStore } from '@reduxjs/toolkit'
import blogSlice from '../reducers/blogSlice'
import cartSlice from '../reducers/cartSlice'
import orderSlice from '../reducers/orderSlice'
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
        scan: scanSlice,
        order: orderSlice,
        blog: blogSlice,
    },
  middleware:  (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: false,
  }),
})
