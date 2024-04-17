import { HttpClient } from '../infra/HttpClient/HttpClient'

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
                
                const res = await resposta.body;
                console.log(res)
                console.log("RESPOSTA DO SERVIDOR", res)
            }
        })
    }
}