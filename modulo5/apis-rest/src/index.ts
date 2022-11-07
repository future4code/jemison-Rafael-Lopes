// Exercício 1
// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.
// a. Qual método HTTP você deve utilizar para isso?
// R: método GET

// Como você indicaria a entidade que está sendo manipulada?
// R: Se dá pelo path que é passado em cada endpoint

import express, { Request, Response } from "express";
import cors from "cors";
import { users } from './data';


const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

// Exercício 2
// Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` específica, 
// recebendo apenas um `type` por vez.
// a. Como você passou os parâmetros de type para a requisição? Por quê?
// R: Por path params pois identifica recursos específicos

// b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados
// R: Por meio da utilização de enum para que aceite apenas os tipos que estão no arquivo types.ts

app.get('/users/user/:type', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const userType = req.params.type

        if (userType === ':type') {
            errorCode = 422
            throw new Error("Falta passar o tipo do usuário como parâmetro ");
        }
        const typeSearched = users.filter((type) => {
            return type.type.toLowerCase() === userType.toLowerCase()
        })
        if (!typeSearched) {
            errorCode = 404
            throw new Error("Tipo de usuário não encontrado");
        }
        res.status(200).send(typeSearched)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


// Verificação do servidor
app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
})