import express from 'express'
import Profile from '../models/ProfileModel.js'

// @route  GET api/profile/:userName
// @desc   Fetch a profile based on userName
// @access Private
export const getProfile = async (req, res) => {
  try {
    // Extract userName from the route parameters
    const { userName } = req.params

    // Find the profile based on userName
    const profile = await Profile.findOne({ userName })

    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' })
    }

    res.json(profile)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server Error')
  }
}

// @route  PUT api/profile/:userName
// @desc   Update a profile after verifying logged in user credentials
// @access Private
export const updateProfile = async (req, res) => {
  try {
    // Extract userName from the URL parameters
    const { userName } = req.params

    // Check if the userName in the token matches the userName in the request
    if (req.user.userName !== userName) {
      return res.status(401).json({ msg: 'User not authorized' })
    }

    // Find the profile based on userName
    const profile = await Profile.findOne({ userName })

    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' })
    }

    // Update the profile with the new data
    // Assume req.body contains the fields to be updated, e.g., bio, picturePath
    const updatedProfile = await Profile.findOneAndUpdate(
      { userName },
      { $set: req.body },
      { new: true } // Return the updated document
    )

    res.json(updatedProfile)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

// // @route  POST api/profile/:userName/follow
// // @desc   Follow another User based on userName
// // @access Private
export const followUser = async (req, res) => {}

// // @route  POST api/profile/:userName/unfollow
// // @desc   Follow another User based on userName
// // @access Private
export const unfollowUser = async (req, res) => {}
