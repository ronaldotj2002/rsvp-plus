const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UsuarioService {
    async cadastrar(dto) {
        console.log("DTO", dto)
        const usuario = await database.Usuarios.findOne({ 
            where: { 
                email: dto.email
            }
        })

        if(usuario) {
            throw new Error("Usuário já cadastrado")
        }

        try {

            const senhaCriptografada = await hash(dto.senha, 8)
            const novoUsuario = await database.Usuarios.create({ 
                id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaCriptografada
    
            })

            return novoUsuario

        } catch (err) {
            throw new Error('Erro ao cadastrar usuario', err)
        }



    }
}

module.exports = UsuarioService