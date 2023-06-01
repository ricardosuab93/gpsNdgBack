const sql = require('mssql')

const sqlConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const getConnection = async () => {
  try {
    const pool = await sql.connect(sqlConfig)
    console.log('DATABASE CONNECTED')
    return pool
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getConnection }
