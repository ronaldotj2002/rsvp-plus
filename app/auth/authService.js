import { HttpClient } from '../infra/HttpClient/HttpClient'
import { tokenService } from './tokenService'

export const AuthService = {
    async login(email, senha) {
        return HttpClient('http://localhost:3100/auth/login', {
            method: 'POST',            
            body: {email, senha}
        })
        .then( async (resposta) => {
            if(!resposta.ok) {

                throw new Error("Usuário ou senha inválido!")
            }  else {
                
                const res = await resposta;    
                console.log("res", res)       
                tokenService.save(res.body.accessToken)
            }
        })
    },

    getToken(ctx) {
        const token = tokenService.get(ctx);
        console.log("token", token)
        return token
    }

}