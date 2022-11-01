import express, { Request, Response } from 'express';
import cors from 'cors';
import * as mockup from './data'

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// Crie uma nova API do zero e desenvolva um endpoint de teste com método GET 
// no path “/test” que retorna a mensagem: “Servidor rodando na porta (colocar porta)!”. 

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send("Servidor rodando na porta 3003")
})

// Exercício 4
// Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. 
// A id do produto deve ser gerada automaticamente pela API.

app.post('/test',(req:Request, res:Response)=>{
    const newProduct = req.body.name
    
    // Tratamento para que seja passado o parametro correto
    if(!newProduct){
        res.status(400)
    }
})

// Servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");

})
