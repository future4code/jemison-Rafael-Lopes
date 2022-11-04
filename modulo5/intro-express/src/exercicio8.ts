// Construa um endpoint que retorne os posts de um usuário em particular.
// Use o JSONPlaceholder como exemplo para a construção da rota.

import express, { Request, Response } from 'express';
import cors from 'cors';
import { arrayDePosts } from './exercicio6';

const app = express()

app.use(express.json())

app.use(cors())

app.get("/arrayDePosts/:id", (req: Request, res: Response) => {

    const postagensFiltradas = arrayDePosts.filter((post) => {

        let id = 1
        if (id === post.id) {
            return post
        }
    })
    res.status(200).send(postagensFiltradas)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})