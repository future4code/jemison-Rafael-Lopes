//------------Exercícios de interpretação de código 01---------------

//a)Matheus Nachtergaele, Virginia Cavendish, canal: "Globo", horário:"14h"

//------------Exercícios de interpretação de código 02---------------

//a)nome: 'Juca', idade: 3, raca: 'SRD';
// nome: 'Juba', idade: 3, raca: 'SRD';
//nome: 'Jubo', idade: 3, raca: 'SRD'

/*b) A sintaxe dos três pontos antes do nome de um objeto
realiza a cópia inteira de um objeto para outro*/

//------------Exercícios de interpretação de código 03---------------

//a)false, undefined

//b)false porque para a propriedade backender foi atribuído o boleano 'false';
//Undefined porque não houve atribuição de valor para a propriedade altura


//------------Exercícios de Escrita de Código 01---------------

const pessoa = {
    nome: "Rafael",
    apelidos: ["Rafa", "Raphix", "Fael"]
}

function recebeObjeto() {
    return pessoa.nome,
        console.log('1.a)', "Eu sou " + pessoa.nome, "mas pode me chamar de: " + pessoa.apelidos[0] + ", " + pessoa.apelidos[1] + " ou " + pessoa.apelidos[2] + ".")
}
recebeObjeto()

/*b)Agora, usando o operador spread, crie um novo objeto mantendo o valor 
da propriedade nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como 
argumento o novo objeto*/
const novoObjeto = {
    ...pessoa,
    apelidos: ["Fafal", "Rafinha", "Capenga"]
}
console.log('1.b)', novoObjeto)
recebeObjeto(novoObjeto)

//------------Exercícios de Escrita de Código 02---------------
//a)
const pessoa1 = {
    nome: "Rhavi",
    idade: 54,
    profissao: "contador"
}
console.log(pessoa1)

const pessoa2 = {
    nome: "Euriane",
    idade: 36,
    profissao: "Assistente Social"
}
console.log(pessoa2)

//b)
function objeto1(nome, idade, profissao) {
    return dadosDePessoa1 = ["Valor de nome:" + pessoa1.nome, "número de caracteres:" + pessoa1.nome.length, "O valor de idade:" + pessoa1.idade, "O valor de profissão:" + pessoa1.profissao, "O número de caracteres da profissão:" + pessoa1.profissao.length]
}
objeto1(pessoa1)
console.log(dadosDePessoa1)

function objeto2(nome, idade, profissao) {
    return dadosDePessoa2 = ["Valor de nome:" + pessoa2.nome, "número de caracteres:" + pessoa2.nome.length, "O valor de idade:" + pessoa2.idade, "O valor de profissão:" + pessoa2.profissao, "O número de caracteres da profissão:" + pessoa2.profissao.length]
}
objeto2(pessoa2)
console.log(dadosDePessoa2)

//------------Exercícios de Escrita de Código 03---------------

//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

let carrinho = []

//b)
const fruta1 = {
    nome: 'Banana',
    disponibilidade: true
}
const fruta2 = {
    nome: 'Melancia',
    disponibilidade: true
}
const fruta3 = {
    nome: 'Morango',
    disponibilidade: true
}

//c)
function frutas(fruta) {
    return carrinho.push(fruta1, fruta2, fruta3);
}
frutas()
console.log(carrinho)