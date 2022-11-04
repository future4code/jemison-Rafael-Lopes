// Construa um endpoint de criação de afazeres. A resposta deve retornar o array de afazeres atualizado.

import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

app.post('/chores',(req:Request, res:Response)=>{



    res.status(200).send('Alguma coisa')
})



app.listen(3003,()=>{
    console.log("Servidor rodando na porta 3003");
})
