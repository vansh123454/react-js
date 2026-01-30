import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // this is vvvvvvery imp
  }
})

export default store; 