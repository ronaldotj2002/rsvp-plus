const { Router } = require('express');

const ConvidadoController = require('../controllers/ConvidadoController.js');

const convidadoController = new ConvidadoController();

const router = Router();

router.get('/convidados', (req, res) => convidadoController.pegarTodos(req, res));

module.exports = router;