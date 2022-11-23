import {Request, Response} from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   
   let statusCode = 400
   try {
      
      let name = req.query.name 

      if(!name){
         name = "%"
      }
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  const result = await connection("aula48_exercicio")
//  .where("name", "like", `%${name}%`)
//  if(result.length <1){
//     let statusCode = 404
//     throw new Error("Nenhum usuário encontrado")
//    }

 export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }