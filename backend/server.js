import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const port = process.env.PORT || 5000
connectDB()

const app = express()
app.use(express.json()) // The req.body is readable since it is in Json format

app.use('/api/auth', authRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`))
