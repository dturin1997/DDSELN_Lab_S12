const express = require('express');
const router = express.Router()

const contactoController = require('../controllers/contactoController')

router.get('/', contactoController.mostrar)
//Crear contacto (POST)
router.post('/crear', contactoController.crear)
//Editar contacto (POST)
router.post('/editar', contactoController.editar)
//Borrar contacto (GET)
router.get('/borrar/:id', contactoController.borrar)
module.exports = router

module.exports = router