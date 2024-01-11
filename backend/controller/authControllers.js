import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import User from '../models/UserModel.js'
import Profile from '../models/ProfileModel.js'

const generateJWT = (userId) => {
  const payload = { user: { id: userId } }
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '999h' })
}

// @route  GET api/auth
// @desc   Test route
// @access Private
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server Error')
  }
}

// @route  POST api/auth/register
// @desc   Register a user, create a profile, and get token
// @access Public
export const register = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { userName, email, password, fullName } = req.body

  try {
    // Check if email or username is already in use
    if (await User.findOne({ email })) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }
    if (await User.findOne({ userName })) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'UserName already exists' }] })
    }

    // Create a new user
    const user = new User({ email, password, userName, fullName })

    // Encrypt password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    // Save the user to the database
    await user.save()

    // Generate JWT
    const token = generateJWT(user.id)

    // The URL of the default profile picture already uploaded to Google Cloud Storage
    const defaultProfilePictureUrl =
      'https://storage.googleapis.com/profile-images-instagram-clone/defaultProfilePicture.jpg'

    // Create a new profile with default values, including the default profile picture URL
    const profile = new Profile({
      userName: userName,
      picturePath: defaultProfilePictureUrl, // Set the default profile picture URL
      fullName: fullName, // This line should set the fullName
      bio: '', // Default bio
      followers: [],
      following: [],
      totalNumberOfPosts: 0,
    })

    // Save the profile to the database
    await profile.save()

    // Send back the token (and optionally the created profile)
    res.json({ token }) // You can also just return the token if that's your original design
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

// // @route  POST api/auth/login
// // @desc   Authenticate user and get token
// // @access Public
export const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body

  try {
    // See if user exists
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials ' }] })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials ' }] })
    }

    // Generate and return JWT
    const token = generateJWT(user.id)
    // Return jasonwebtoken
    res.json({ token })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

// @route  DELETE api/auth/delete
// @desc   Delete user
// @access Private

export const deleteUser = async (req, res) => {
  try {
    // Remove user
    await User.findOneAndDelete({ _id: req.user.id })
    res.json({ msg: 'User deleted' })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}
