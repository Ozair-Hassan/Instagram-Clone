import express, { Router } from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
// // @ Controllers Import
import {
  register,
  login,
  deleteUser,
  getUser,
} from '../controller/authControllers.js'
// // @ Validation Rules Import
import {
  validationRulesRegister,
  validationRulesLogin,
} from '../validationRules/authValidationRules.js'

const router = express.Router()

// // Create a new user and get token
router.post('/register', validationRulesRegister, register)

// // Authenticate user and get token
router.post('/login', validationRulesLogin, login)

// // Check token and get user from token
router.get('/verifyToken', authMiddleware, getUser)

// // Check if user exists and delete
router.delete('/delete', authMiddleware, deleteUser)

export default router
