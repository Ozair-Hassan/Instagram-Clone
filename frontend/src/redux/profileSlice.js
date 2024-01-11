import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProfile: null,
  allProfiles: [],
  error: null,
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
