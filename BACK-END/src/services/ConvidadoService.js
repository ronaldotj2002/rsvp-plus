const database = require('../models')

class ConvidadoService {

    static async listarConvidados() {

        try {
            const convidados = await database.Convidados.findAll();

            
            return convidados 
        } catch (err) {
            throw new Error('Erro ao listar convidados')
        }
    }
}

module.exports = ConvidadoService;