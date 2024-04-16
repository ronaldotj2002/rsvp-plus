const { Router } = require('express');

const ConviteController = require('../controllers/ConviteController.js');

const conviteController = new ConviteController();

const router = Router();

router.get('/convite', (req, res) => conviteController.pegarTodos(req, res));
router.put('/convite/:id', (req, res) => conviteController.atualiza(req, res));

module.exports = router;