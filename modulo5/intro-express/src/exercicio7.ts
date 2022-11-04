// Construa um endpoint que retorne os posts criados no exercício anterior.
// Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

import express, { Request, Response } from 'express';
import cors from 'cors';
import { arrayDePosts } from './exercicio6';

const app = express()

app.use(express.json())

app.use(cors())

app.get('/arrayDePosts',(req:Request, res:Response)=>{

    const postagens = arrayDePosts.map((post)=>{
        return post
    })
    res.status(200).send(postagens)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");

})