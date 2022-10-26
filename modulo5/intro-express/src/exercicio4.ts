// Construa um endpoint que retorne os usuários criados no exercício anterior.
// Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

import express, { Request, Response } from 'express';
import cors from 'cors';
import { usuarios } from "./exercicio3"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/usuarios", (req: Request, res: Response) => {

    const listaDeUsuarios = usuarios.map((usuario) => {
        return usuario
    })
    res.status(200).send(listaDeUsuarios)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})