const { Router } = require('express')
const router = Router()

const { RutaClientexUsuario, DetalleClientexId } = require('../controllers/Clientes.js')

router.get('/RutaClientexUsuario', RutaClientexUsuario)
router.get('/RutaDetalleClientexId', DetalleClientexId)

module.exports = router
