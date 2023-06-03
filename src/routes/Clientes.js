const { Router } = require('express')
const router = Router()

const { RutaClientexUsuario, DetalleClientexId, ActualizaGpsCliente } = require('../controllers/Clientes.js')

router.get('/RutaClientexUsuario', RutaClientexUsuario)
router.get('/RutaDetalleClientexId', DetalleClientexId)
router.put('/ActualizaGpsCliente', ActualizaGpsCliente)

module.exports = router
