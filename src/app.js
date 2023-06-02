require('dotenv').config()
const { getConnection } = require('../config/connection.js')
const express = require('express')
// const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
// app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.get('/NORDIGESAServices', (req, res) => {
  res.send('NORDIGESA API RICARDO')
})

app.use('/NORDIGESAServices/api', require('../src/routes/index.js'))

getConnection()

app.listen(PORT, () => {
  console.log(`Ready on port ${PORT}`)
})
