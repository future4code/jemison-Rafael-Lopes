import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";
// ------------------------------ Exercício 2 ------------------------------ //
// Agora crie o arquivo UserDatabase.ts para desenvolver a classe UserDatabase. 
// Ela é filha da BaseDatabase e deve possuir os métodos de getAllUsers, createUser e getUserById.

export class UserDatabase extends BaseDatabase {

    // Crie um atributo que irá guardar o nome da tabela referente à usuários.
    public static TABLE_USERS = 'Labe_Users'

    public async getAllUsers() {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
        return result
    };

    public async createUser(user: User) {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                password: user.getPassword()
            });
    };

    public async getUserById(id: string) {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id: id })
        return result
    };
};