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

app.put('/test/products', (req: Request, res: Response) => {
    const newProduct = req.body.name
    const { id, name, price } = req.body

    // Tratamento para que seja passado o parametro correto
    if (!newProduct || !id || !name || price) {
        res.status(400).send("Algo deu errado, verifique se os parametros estão corretos")
    }

    for (let i = 0; i < newProduct.length; i++) {

        if (newProduct[i].id === newProduct) {
            newProduct[i].newProduct.push(
                {
                    id: Date.now().toString(),
                    name: name,
                    price: price
                }
            )
        }
    }
    res.status(200).send({ newProduct })
})


// Exercício 5
// Crie um endpoint que retorna todos os produtos.

app.get('/products',(req:Request, res: Response)=>{
    res.status(200).send(mockup.products)
})

// Servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");

})
