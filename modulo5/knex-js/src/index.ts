import express from "express";
import cors from 'cors';
import { Request, Response } from "express";
import connection from "./database/connection";

const app = express()

app.use(express.json())

app.use(cors())


// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `)
//     return result[0][0]
// }

// Assim a chamada funciona fora dos endpoints com .then()/.catch

// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// Assim a chamada funciona fora dos endpoints com await

// (async () => {
//     console.log(await getActorById("001"))
// })()

// Ou então podemos chamá-la dentro de um endpoint

// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id

//         await getActorById(id)

//         res.end()
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })


// Resposta - Exercício 1- b

// const searchActor = async (name: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = "${name}"
//     `)
//     return result
//   }

//   searchActor("Moacyr Franco")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// Resposta - Exercício 1- c

// const countActors = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);

//     const count = result[0][0].count;
//     return count;
// };

// (async () => {
//     console.log('Quantidade de itens com o gender male:', await countActors("male"))
//     console.log('Quantidade de itens com o gender female:', await countActors("female"))
// })();


// Resposta - Exercício 2- a

const updateActor = async (id: string, salary: number): Promise<any> => {


    await connection("Actor").update(
        {
            salary: salary,
        }
    ).where("id", id)
};

app.put("/actor/:id", async (req: Request, res: Response) => {

    const actorId = req.query.id;
    const { salary } = req.body;

    try {
        if (!actorId) {
            const erro = new Error("Informe o Id do Ator ou Atriz");
            erro.name = "IdActorNotFound";
            throw erro;
        }
        const id = req.query.id as string

        await updateActor(id, salary)

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
});

















// Configuração do servidor

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});