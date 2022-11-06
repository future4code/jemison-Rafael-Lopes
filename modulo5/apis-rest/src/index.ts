// Exercício 1
// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.
// a. Qual método HTTP você deve utilizar para isso?
// R: método GET

// Como você indicaria a entidade que está sendo manipulada?
// R: Se dá pelo path que é passado em cada endpoint

import express, { Request, Response } from "express";
import cors from "cors";
import { users } from './data'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

// Exercício 2
// Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` específica, 
// recebendo apenas um `type` por vez.

app.get('/users/user', (req: Request, res: Response) => {

})


// Verificação do servidor
app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
})