import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

const config = dotenv.config()

const app = express()
app.use(express.json())

connectDB()
console.log(`Running on port: ${process.env.PORT}`)
