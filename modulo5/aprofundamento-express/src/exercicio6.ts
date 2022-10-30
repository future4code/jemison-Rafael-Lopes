// Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.

import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.put('/chores/status', (req: Request, res: Response) => {


    res.status(200).send("Status modificado")
})




app.listen(3003, () => {
    console.log("Servido rodando na porta 3003");
})