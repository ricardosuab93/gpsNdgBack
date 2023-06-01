const { Router } = require('express')
const router = Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (filename) => {
  return filename.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithoutExtension = removeExtension(file)
  const skip = ['index'].includes(fileWithoutExtension)

  if (!skip) {
    router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}`))
    console.log('RUTA', removeExtension(file), 'CARGADA')
  }
  return false
})

router.get('*', (req, res) => {
  res.status(404)
  res.send({
    Message: 'No HTTP resource was found that matches the request URI'
  })
})

module.exports = router
