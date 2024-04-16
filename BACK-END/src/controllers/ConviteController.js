
const ConviteService = require('../services/ConviteService.js');


class ConviteController {

    static async listar(req, res) {
        console.info("Iniciando a lista de Convites..")
        try {
            const convites = await ConviteService.listarConvite();
            return res.status(200).json(convites);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
 
    static async filtrarConvite(req, res) {
        const { codigo } = req.params;
        console.info("Iniciando o filtro de Convites..", {codigo})
    
        try {
            const pegarConvite = await ConviteService.buscarConvite(codigo)

            console.log("============",pegarConvite)
            if(pegarConvite === null) {
                return res.status(400).send('Convite inválido');
            }
            return res.status(200).json(pegarConvite);
         
        } catch (err) {
            return res.status(400).json({mensagem: `Convite não encontrado`})
           
        }
    }

    static async mudarSatusConvite(req, res) {

        const body = req.body
        const { id } = req.params;
        console.log("_____id",{id})
        try {
            const editarConvite = await ConviteService.editarConvite(body, id)
            return res.status(200).json(editarConvite);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = ConviteController;