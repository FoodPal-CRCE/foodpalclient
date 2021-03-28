import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../reducers/cartSlice'
import restaurantSlice from '../reducers/restaurantSlice'
import signinReducer from '../reducers/signinSlice'
import signupSlice from '../reducers/signupSlice'


export default configureStore({
  reducer: {
        signin: signinReducer,
        restaurant: restaurantSlice,
        signup: signupSlice,
        cart: cartSlice,
    },
  middleware:  (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: false,
  }),
})
