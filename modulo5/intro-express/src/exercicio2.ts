// Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. 
// No seu projeto, crie uma variável de tipo para representar esse recurso. 
// Eles devem possuir as seguintes propriedades: - id - name- phone- email- website.

import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})