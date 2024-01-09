import express, { Router } from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import {
  getProfile,
  updateProfile,
  followUser,
  unfollowUser,
} from '../controller/profileControllers.js'

const router = express.Router()

// Fetch a profile based on userName
router.get('/:userName', getProfile)

// Edit a profile
router.put('/:userName', authMiddleware, updateProfile)

// Follow another profile
router.post('/:userName/follow', authMiddleware, followUser)

// Unfollow another profile
router.post('/:userName/unfollow', authMiddleware, unfollowUser)

export default router
