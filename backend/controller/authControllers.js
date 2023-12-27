import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import User from '../models/UserModel.js'

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

// // @route  POST api/auth/register
// // @desc   Register a user and get token
// // @access Public
export const register = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { userName, email, password, fullName } = req.body
  try {
    // Check if email is already in use
    if (await User.findOne({ email }))
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    // Check if username is already in use
    if (await User.findOne({ userName }))
      return res
        .status(400)
        .json({ errors: [{ msg: 'UserName already exists' }] })

    // create a new user
    const user = new User({ email, password, userName, fullName })
    // Encrypt password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()
    // Generate and return JWT
    const token = generateJWT(user.id)
    res.json({ token })
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
