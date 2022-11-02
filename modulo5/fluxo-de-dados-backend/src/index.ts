import express, { Request, Response } from 'express';
import cors from 'cors';
import { products } from './data'

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

app.put('/products/newproduct', (req: Request, res: Response) => {
    const { name, price } = req.body

    // Tratamento para que seja passado o parametro correto
    if (!name || !price) {
        res.status(400).send("Algo deu errado, verifique se os parametros estão corretos")
    }

    const findProduct = products.find((element) => {
        return element.name === name
    })

    if (findProduct) {
        res.status(400).send("O produto procurado já existe")
    } else {
        products.push(
            {
                id: Date.now().toString(),
                name: name,
                price: price
            }
        )
    }
    res.status(200).send({ products })
})


// Exercício 5
// Crie um endpoint que retorna todos os produtos.

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products)
})

// Exercício 6
// Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.


// Exercício 7
// Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada.


// Exercício 8
// Refatore o endpoint do exercício 4 (criar produto) para que sejam implementados fluxos de validação dos dados recebidos (name e price)

// Exercício 9
// Refatore o endpoint do exercício 6 (editar produto) para que sejam implementados fluxos de validação dos dados recebidos (price)

// Exercício 10
// Refatore o endpoint do exercício 7 (deletar produto) para que sejam implementados fluxos de validação dos dados recebidos

// Servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");

})
