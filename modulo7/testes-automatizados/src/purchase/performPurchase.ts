import { User } from "../model/user";

// 1.b) Implemente  a função:
// Caso o saldo seja maior ou igual ao valor de compra você deve retornar um novo usuário 
// (com o mesmo nome e o saldo atualizado depois da compra). 
// Caso contrário, retorne undefined

export default function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined;
};