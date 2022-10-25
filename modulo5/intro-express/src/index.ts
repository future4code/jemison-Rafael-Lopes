import express, {Request, Response} from "express"
import cors from 'cors';

const app = express() 

app.use(express.json()) 

app.use(cors()) 

app.get('/teste/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    console.log(id);
    
    res.status(201).send('Hello from Express')
})

app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003");
})