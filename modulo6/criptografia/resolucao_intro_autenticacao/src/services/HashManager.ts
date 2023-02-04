import * as bcrypt from "bcryptjs"

export class HashManager {

    // b) Cria a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.   
    generateHash = async (s: string): Promise<string> => {
        const rounds: number = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result
    }
    // c) Cria a função que verifica se uma string é correspondente a um hash, use a função compare do bcryptjs
    compareHash = async (s: string, hashText: string): Promise<boolean> => {
        const result = await bcrypt.compare(s, hashText)
        return result
    }
}