// Faça a instalação e configuração do Express na pasta do exercício. 
// Para testar, crie um endpoint que aponte para a URL base da API. 
// Esse endpoint pode responder apenas com um status ou mensagem fixa.

import express, { Request, Response } from "express"
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(201).send('Hello from Express')
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})