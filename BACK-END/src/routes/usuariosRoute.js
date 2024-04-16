const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js')

const router = Router();

router
    .post('/usuarios', UsuarioController.cadastrar)

module.exports = router;