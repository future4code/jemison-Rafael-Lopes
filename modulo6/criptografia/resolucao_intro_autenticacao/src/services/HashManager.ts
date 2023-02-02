import * as bcrypt from "bcryptjs"

export class HashManager {
    
// b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.   
    generateHash = async (s: string): Promise<string> => {
        const rounds: number = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result
    }
}