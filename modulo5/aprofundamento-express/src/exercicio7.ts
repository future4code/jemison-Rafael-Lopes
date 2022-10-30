// Construa um endpoint que deleta um determinado afazer de acordo com sua id.

import express, {Request, Response} from 'express';
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.delete('/chores/:id',(req:Request, res:Response)=>{


    res.status(400).send('Algo deu errado, informe um id válido');

    res.status(200).send("Retorno para o Cliente")
})

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003");
    
})
