import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProfile: null, // The profile of the logged-in user
  error: null,
  // You can add additional states related to profiles here
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.currentProfile = action.payload
    },
    updateProfile: (state, action) => {
      // Assuming the action.payload contains the updated profile fields
      if (
        state.currentProfile &&
        state.currentProfile.userName === action.payload.userName
      ) {
        state.currentProfile = { ...state.currentProfile, ...action.payload }
      }
    },
    clearProfile: (state) => {
      state.currentProfile = null
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setProfile, updateProfile, clearProfile, setError } =
  profileSlice.actions

export default profileSlice.reducer
