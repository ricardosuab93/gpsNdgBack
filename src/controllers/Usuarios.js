const sql = require('mssql')

const GetUsuarioLogin = async (req, res) => {
  const { Login } = req.query

  console.log(Login)

  try {
    const query = `select * from SEG_Usuario where Login = '${Login}'`
    const result = await sql.query(query)
    res.status(200).send(result.recordsets[0])
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  GetUsuarioLogin
}
