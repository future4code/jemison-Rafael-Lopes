// Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior. 
import { Chores } from "./exercicio2"


const toDoArray: Chores[] = [
    {
        "userId": 123,
        "id": 1,
        "title": "Do the laundry",
        "completed": false
    },
    {
        "userId": 345,
        "id": 2,
        "title": "Do the ironing",
        "completed": true
    },
    {
        "userId": 567,
        "id": 3,
        "title": "Do the dishes",
        "completed": true
    },
    {
        "userId": 789,
        "id": 4,
        "title": "Get the trash empty",
        "completed": true
    },
]

