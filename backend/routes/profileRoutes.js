import express, { Router } from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import {
  getProfile,
  updateProfile,
  followUser,
  unfollowUser,
  getAllProfiles,
} from '../controller/profileControllers.js'
import multer from 'multer'

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

router.get('/', authMiddleware, getAllProfiles)

// Fetch a profile based on userName
router.get('/:userName', authMiddleware, getProfile)

// Edit a profile
router.put('/:userName', authMiddleware, upload.single('image'), updateProfile)

// Follow another profile
router.post('/:userName/follow', authMiddleware, followUser)

// Unfollow another profile
router.post('/:userName/unfollow', authMiddleware, unfollowUser)

export default router
