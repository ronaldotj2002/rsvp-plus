const database = require('../models')

class ConviteService {

    static async listarConvite() {

        try {
            const convites = await database.Convites.findAll();            
            return convites 
        } catch (err) {
            throw new Error('Erro ao listar convites')
        }
    }
 
    static async buscarConvite(codigo) {
console.log("convite service", codigo)
        try {
            const convite = await database.Convites.findOne({
                where: {                   
                        codigo: codigo                   
                }
            });

            return convite

        } catch (err) {
            throw new Error('Erro ao filtrar Convite')
        }


    }

    static async editarConvite(dados, id) {
        console.info("Iniciando edição do status do convite", dados, id)
        try {
            await database.Convites.update(dados, {
                where: { id: Number(id) }
            });
            const statusAtualizado = await database.Convites.findOne({
                where: { id: Number(id) }
            })
            return statusAtualizado
        } catch (err) {
            throw new Error('Erro ao atualizar o status do convite')
        }
    }
}

module.exports = ConviteService;