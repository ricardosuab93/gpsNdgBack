const { Router } = require('express')
const router = Router()

const { RutaClientexUsuario, DetalleClientexId, ActualizaGpsCliente, RutaClientexSupervisor } = require('../controllers/Clientes.js')

router.get('/RutaClientexUsuario', RutaClientexUsuario)
router.get('/RutaClientexSupervisor', RutaClientexSupervisor)
router.get('/RutaDetalleClientexId', DetalleClientexId)
router.put('/ActualizaGpsCliente', ActualizaGpsCliente)

module.exports = router
