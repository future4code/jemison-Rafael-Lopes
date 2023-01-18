import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase{

    public async createUser(
        id:string,
        email:string,
        name:string,
        password:string
    ):Promise<void>{
        try{
            await UserDataBase.connection()
            .insert({
                id, email, name, password
            })
            .into("User_Arq");
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }
}