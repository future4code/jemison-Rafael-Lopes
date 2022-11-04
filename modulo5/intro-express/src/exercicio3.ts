// Crie um array de usuários para servir como base de dados da nossa API.
// Insira nele quantos objetos quiser, fique à vontade para explorar sua criatividade 😉
// Não se esqueça de fazer a tipagem correta desse array

export type Users = {
    nome: string,
    idade: number,
    email: string,
    contato: string,
    estudante: boolean
}
export const usuarios: Users[] = [
    {
        nome: "Rafael",
        idade: 39,
        email: "rafael@email.com",
        contato: "9888-7776",
        estudante: true
    },
    {
        nome: "Maria",
        idade: 36,
        email: "maria@email.com",
        contato: "9999-6776",
        estudante: false
    },
    {
        nome: "João",
        idade: 15,
        email: "joao@email.com",
        contato: "9333-2236",
        estudante: true
    },
    {
        nome: "Tiago",
        idade: 40,
        email: "tiago@email.com",
        contato: "9011-5633",
        estudante: false
    }
];

