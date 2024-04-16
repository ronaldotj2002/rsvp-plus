const { Router } = require('express');

const ConvidadoController = require('../controllers/ConvidadoController')

const convidadoController = new ConvidadoController();

const router = Router();

router.get('/convidados', ConvidadoController.listarConvidados);

module.exports = router;