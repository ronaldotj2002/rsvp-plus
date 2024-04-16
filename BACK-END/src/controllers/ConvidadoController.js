
const ConvidadoService = require('../services/ConvidadoService.js');


class ConvidadoController {

    static async listarConvidados(req, res) {
        console.info("Iniciando a lista de Convidados..")
        try {
            const convidados = await ConvidadoService.listarConvidados();
            return res.status(200).json(convidados);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

}

module.exports = ConvidadoController;