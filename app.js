const express = require('express')
const app = express()
require('dotenv').config()
const passportSetup = require('./config/passport-setup')

const authRoutes = require('./routes/authRoutes')

app.use('/auth', authRoutes)

module.exports = app