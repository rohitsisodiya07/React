import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/signupSlice'
export const store = configureStore({
  reducer: {

    signup : authReducer
  }

})