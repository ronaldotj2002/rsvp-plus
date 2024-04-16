const ConviteService = require('../services/ConviteService')

class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegarTodos(req, res) {
        console.log("------controller.js")
        try {
            const registros = await this.entidadeService.pegarRegistros();
            return res.status(200).json(registros);
        } catch (err) {
            console.log("------> error", err)
        }
    }

    // static async filtrarConvite(req, res) {
    //     const { id } = req.params;
    //     console.info("Iniciando o filtro de Convites..")
    //     const convite = req.body;

    //     try {
    //         const pegarConvite = await ConviteService.buscarConvite(id)
    //         return res.status(200).json(pegarConvite);
         
    //     } catch (err) {
    //         return res.status(400).json({mensagem: `Convite não encontrado`})
           
    //     }
    // }

    async atualiza(req, res) {
        
        const { id } = req.params;
        const dadosAtualizados = req.body;

        try {
            const atualizaConvite = await this.entidadeService.atualizardados(dadosAtualizados, Number(id));
            console.log("------> atualiza")

            if(!atualizaConvite) {
                
                return res.status(400).json({mensagem: `O Registro não foi atualizado!`})
            }
            return res.status(200).json({mensagem: `Atualizado com sucesso!`})
        } catch (err) {
            console.log("------> atualiza erro")
        }
    }
}

module.exports = Controller;