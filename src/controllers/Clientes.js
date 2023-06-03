const sql = require('mssql')

const RutaClientexUsuario = (req, res) => {
  const { Usuario } = req.query

  const request = new sql.Request()
  request.input('prmintUsuario', sql.Int, Usuario)

  request
    .execute('uspVEN_ListaRutaClientexUsuario')
    .then((result) => {
      res.status(200).send(result.recordsets[0])
    })
    .catch((err) => {
      console.error(err)
    })
}

const DetalleClientexId = async (req, res) => {
  const { clientId } = req.query

  try {
    const query = `SELECT * FROM VEN_ClientePuntoVenta where ClientePuntoVenta = '${clientId}'`
    const result = await sql.query(query)
    res.status(200).send(result.recordsets[0])
  } catch (error) {
    console.error(error)
  }
}

const ActualizaGpsCliente = async (req, res) => {
  const { cpv, lat, long } = req.query

  try {
    const query = `UPDATE VEN_ClientePuntoVenta SET Latitud = ${lat}, Longitud = ${long} WHERE ClientePuntoVenta = ${cpv}`
    await sql.query(query)
    res.status(200).json({ message: 'Actualizado correctamente' })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  RutaClientexUsuario,
  DetalleClientexId,
  ActualizaGpsCliente
}
