// Exercício 1
// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.
// a. Qual método HTTP você deve utilizar para isso?
// R: método GET

// Como você indicaria a entidade que está sendo manipulada?
// R: Se dá pelo path que é passado em cada endpoint

import express, { Request, Response } from "express";
import cors from "cors";
import { users } from './data';
import { User } from "./types";


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

// Exercício 3    
// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando por nome.
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// R: Query params

app.get('/users/user', (req: Request, res: Response) => {

    let errorCode = 400
    try {
        const userName = req.query.name as string

        if (!userName) {
            errorCode = 422
            throw new Error("Falta passar o nome como parâmetro");
        }

        const userSearched = users.find((user) => {
            return user.name.toLowerCase() === userName.toLowerCase()
        })
        // b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
        if (!userSearched) {
            errorCode = 404
            throw new Error("Usuário não encontrado");
        }
        res.status(200).send(userSearched)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// Exercício 4
// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar coisas. Comecemos criando um usuário na nossa lista. 
// Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.
// a. Mude o método do endpoint para `PUT`. O que mudou?
// R: Após bater no endpoint, aparentemente nada mudou. O item foi adicionado assim como se tivesse utilizado o método post

// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// R: Didaticamente, não é apropriado porque o PUT foi criado para atualizar recursos enquanto o POST para criar novos recursos

app.post('/users', (req: Request, res: Response) => {

    let errorCode = 400
    try {
        const { name, email, type, age } = req.body

        if (!name || !email || !type || !age) {
            throw new Error("Verifique se os parâmetros passados correspondem a name, email, type, age");
        }

        if (type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 402
            throw new Error("O usuário precisa ser do tipo ADMIN ou NORMAL");
        }
        // Novo item 
        const newUser: User = {
            id: Math.random(),
            name: name,
            email: email,
            type: type,
            age: age
        }
        // Atualizando a list com o novo item
        users.push(newUser)
        res.status(201).send(users)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


// Verificação do servidor
app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
})