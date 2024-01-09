import { configureStore } from '@reduxjs/toolkit'
import authSlice from './redux/authSlice'
import profileReducer from './redux/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileReducer,
  },
})
