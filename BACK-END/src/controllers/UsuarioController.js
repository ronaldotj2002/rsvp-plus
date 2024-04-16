const UsuarioService = require('../services/UsuarioService.js');


const usuarioService = new UsuarioService();

class UsuarioController {
     static async cadastrar(req, res) {
        const {nome, email, senha} = req.body;
        try {
            const usuario = await usuarioService.cadastrar({nome, email, senha})
            res.status(201).send(usuario)

        } catch (err) {
            res.status(400).send({mensagem: err.message})
        }

    }
}

module.exports = UsuarioController