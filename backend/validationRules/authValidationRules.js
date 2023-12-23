import { check, validationResult } from 'express-validator'

// Validation rules for registering a new user
export const validationRulesRegister = [
  check('userName', 'UserName is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
]

// Validation rules for logging in a user
export const validationRulesLogin = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
]
