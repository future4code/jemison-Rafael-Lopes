// Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro 
// e retorne uma lista com apenas os emails dos usuários “admin”. 
[
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

type Usuarios = {
    name: string,
    email: string,
    role: string
};

const listaDeUsuarios = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];

const buscaEmailsAdmin = listaDeUsuarios.filter((usuario) => {
    return usuario.role === 'admin';
}).map((usuario) => {
    return usuario.email
})
console.log(buscaEmailsAdmin);
