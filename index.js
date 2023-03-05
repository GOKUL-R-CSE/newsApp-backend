const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors')
const userRoute = require('./routes/users')

const app = express()
app.use(cors())

dotenv.config({ path: './config/config.env' })

connectDB()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(morgan('dev'))

app.use('/api/users', userRoute)

const port = process.env.PORT || 6000
app.listen(port, console.log(`server running in ${port}`))