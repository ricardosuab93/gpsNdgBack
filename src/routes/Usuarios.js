const { Router } = require('express')
const router = Router()

const { GetUsuarioLogin } = require('../controllers/Usuarios.js')

router.get('/GetUsuarioLogin', GetUsuarioLogin)

module.exports = router
