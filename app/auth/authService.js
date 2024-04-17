

export const AuthService = {
    async login(email, senha) {
        return fetch('http://localhost:3100/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                senha
            })
        })
        .then(() => {
            console.log("RESPOSTA DO SERVIDOR")
        })
    }
}