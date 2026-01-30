import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' // name may be different

export const store = configureStore({
  reducer: todoReducer,  
})