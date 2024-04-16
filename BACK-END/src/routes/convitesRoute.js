const { Router } = require('express');

const ConviteController = require('../controllers/ConviteController.js');

const conviteController = new ConviteController();

const router = Router();

router
    .get('/convite', ConviteController.listar)
    .get('/convite/codigo/:codigo', ConviteController.filtrarConvite)
    .put('/convite/:id', ConviteController.mudarSatusConvite)

module.exports = router;