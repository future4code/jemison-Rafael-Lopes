// Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/chores/user/:id', (req: Request, res: Response) => {


    res.status(200).send("Retorno para o cliente")
})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");

})