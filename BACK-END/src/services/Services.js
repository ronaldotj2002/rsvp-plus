const { where } = require('sequelize');
const database = require('../models');

class Services {
    constructor(nomeModel) {
        this.model = nomeModel;
    }
    async pegarRegistros() {
        console.log("SERVICES.. pegarRegistros")
        return database[this.model].findAll();
    }

    async atualizardados(dadosAtualizados, id) {
        const conviteAtualizado = database[this.model].update(
            dadosAtualizados, {
                where: {id: id}
            }
        )
        if(conviteAtualizado[0] === 0){
            return false;
        }
        return true;
    }
    
}

module.exports = Services;