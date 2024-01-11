import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProfile: null, // The profile of the logged-in user
  allProfiles: [], // Array to store all profiles
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
    setAllProfiles: (state, action) => {
      state.allProfiles = action.payload
    },
    // Add more reducers here if needed
  },
})

export const {
  setProfile,
  updateProfile,
  clearProfile,
  setError,
  setAllProfiles,
} = profileSlice.actions

export default profileSlice.reducer
