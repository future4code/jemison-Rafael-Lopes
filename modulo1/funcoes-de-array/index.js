// ====================================================================

//=============== Exercícios de interpretação de código ===============

// ====================================================================

// Exercício 1:

// a) O que vai ser impresso no console?
//Serão impressos 3 arrays de objetos contendo nomes e apelidos

// ====================================================================

// Exercício 2:

// a) O que vai ser impresso no console?
// Será impresso um novo array contendo apenas 3 nomes

// ====================================================================

// Exercício 3:

// a) O que vai ser impresso no console?
// Será impresso um novo array contendo nome e apelido de Amanda e Laís.
//Não será incluído o o item que contem o apelido Chijo

// ====================================================================

//================ Exercícios de escrita de código ====================

// ====================================================================

// Exercício 1:

/* Dado o seguinte array de cachorrinhos que são clientes de um pet 
shop, realize as operações pedidas nos itens abaixo utilizando as 
funções de array map e filter: */

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomeDosDoguinhos = pets.map((pet) => {
    return pet.nome
})
console.log('1.a)', 'O nome dos doguinhos são:', nomeDosDoguinhos)

// b) Crie um novo array apenas com os cachorros salsicha

const doguinhosRacaSalchicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})
console.log('1.b)', 'Array com cachorros salsicha:', doguinhosRacaSalchicha)

/* c) Crie um novo array que possuirá mensagens para enviar para todos
os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom
de desconto de 10% para tosar o/a [NOME]!" */

const doguinhosRacaPoodles = pets.forEach((pet) => {
    return pet.raca === "Poodle"
})
console.log('1.c)', "Você ganhou um cupom de desconto de 10% para tosar o/a", doguinhosRacaPoodles)


// ====================================================================

// Exercício 2:

/* Dado o seguinte array de produtos, realize as operações pedidas nos 
itens abaixo utilizando as funções de array map e filter: */

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item

const nomeDosProdutos = produtos.map((produto) => {
    return produto.nome
})
console.log('2.a)', 'Nome de cada item:', nomeDosProdutos)

/* b) Crie um novo array que contenha um objeto com o nome e o 
preço de cada item, aplicando 5% de desconto em todos eles */

const desconto = produtos.map((produto) => {
    return { nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2) }
})
console.log('2.b)', 'Novo array com desconto:', desconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const objetosCategoriaBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log('2.c)', 'Objetos da categoria bebidas:', objetosCategoriaBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"





/* e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê" */