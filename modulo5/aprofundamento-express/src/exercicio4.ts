// Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, 
// ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.
import express, { Request, Response } from 'express';
import cors from 'cors';
import { toDoArray } from './exercicio3';

const app = express()

app.use(express.json())

app.use(cors())

app.get('/chores/status', (req: Request, res: Response) => {
    const toDoStatus = toDoArray;

    const filteredToDo = toDoStatus.filter((chore) => {
        if (chore.completed === false) {
            return chore
        }
    })

    res.status(200).send(filteredToDo)
})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})