require('dotenv').config()
const { getConnection } = require('../config/connection.js')
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.get('/NORDIGESAServices', (req, res) => {
  res.send('NORDIGESA API RICARDO')
})

app.use('/NORDIGESAServices/api', require('../src/routes/index.js'))

getConnection()

app.listen(PORT, () => {
  console.log(`Ready on port ${PORT}`)
})
