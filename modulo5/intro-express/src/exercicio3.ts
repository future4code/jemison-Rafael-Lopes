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
export const usuarios: Users[] = [{
    nome: "Rafael",
    idade: 39,
    email: "rafael@email.com",
    contato: "9888-7776",
    estudante: true
}]

