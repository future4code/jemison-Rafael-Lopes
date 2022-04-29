// --------------------------Exercícios de Interpretação de Código 01-----------------------------


/* a)O código recebe o número do usuário, divide por 2 e retorna 0 se o número recebido foi par
verifica se um número divisível por 2 é igual a 0 como resultado */

// b)Para números pares ele imprime a mensagem 'Passou no teste.'

// c)Para números ímpares ele imprime a mensagem 'Não passou no teste.'


// --------------------------Exercícios de Interpretação de Código 02-----------------------------


// a)Serve para comparar os valores da variável fruta com o valor da propriedade preço

// b) Será impresso a mensagem: 'O preço da fruta  Maçã  é  R$  2.25'

// c) Se retirássemos o BREAK seria impressa a mensagem: 'O preço da fruta  Pêra  é  R$  5'


// --------------------------Exercícios de Interpretação de Código 03-----------------------------


// a)A primeira linha está solicitando um número do usuário

/* b)Se o usuário digitou o número 10 mensagem seria: 'Esse número passou no teste'
Poré, se o usuário digitou -10 o código não retornará mensagem alguma */

/* c)Sim, haverá erro no console pois, a variável mensagem não foi definida.
Portanto, o escopo global (const numero) não consegue acessar o escopo let mensagem */


// --------------------------Exercícios de Escrita de Código 01-----------------------------


const idade = Number(prompt('Informe a sua idade'));

function allowedToDrive(idade) {
    if (idade >= 18) {
        console.log('Você pode dirigir.')
    } else {
        console.log('Você não pode dirigir.')
    }
}
allowedToDrive(idade)


// --------------------------Exercícios de Escrita de Código 02-----------------------------

let turnoDeEstudo = prompt("Informe com M, V ou N o turno que você estuda")

let turnoDeEstudo = prompt('Informe com M,V ou N o turno que voc~e estuda')
let M = 'Bom Dia!'
let V = 'Boa Tarde'
let N = 'Boa Noite!'

function verificaturno(M, V, N) {
    if (turnoDeEstudo === 'M')
        console.log('Bom Dia!')
}
if (turnoDeEstudo === 'V') {
    console.log('Boa Tarde')
}
if (turnoDeEstudo === 'N') {
    console.log('Boa Noite!')
}
verificaturno(M, V, N)


// --------------------------Exercícios de Escrita de Código 03-----------------------------


let turnoDeEstudo = prompt('Informe com M, V ou N o turno que você estuda')

switch (turnoDeEstudo) {
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
}

// --------------------------Exercícios de Escrita de Código 04-----------------------------


let genero = prompt('Qual o gênero de filme deseja assistir?')
let valor = Number(prompt('Qual o preço do ingresso?'))

function assiteFilmeSe(genero, valor) {
    if (genero === 'fantasia' && valor < 15) {
        console.log('Bom Filme!')
    } else {
        console.log('Escolha outro filme :(')
    }
}
assiteFilmeSe(genero, valor)


// ---------------------------------Desafio Opcional 01-----------------------------------


let genero = prompt('Qual o gênero de filme deseja assistir?')
let valor = Number(prompt('Qual o preço do ingresso?'))
let lanchinho = prompt('Qual lanchinho vai comprar?')

function assiteFilmeSe(genero, valor) {
    if (genero === 'fantasia' && valor < 15) {
        console.log('Bom Filme!')
        console.log(`Aproveite o seu ${lanchinho}!`)
    } else {
        console.log('Escolha outro filme :(')
    }
 }
assiteFilmeSe(genero, valor)


// ---------------------------------Desafio Opcional 02-----------------------------------


const IN = "Internacional"
const DO = "Nacional"

const SF = "Semi-final"
const DT = "Decisão de 3º lugar"
const FI = "Final"

const categoria_1_Sf = Number(1320)
const categoria_2_Sf = Number(880)
const categoria_3_Sf = Number(550)
const categoria_4_Sf = Number(220)

const categoria_1_Dt = Number(660)
const categoria_2_Dt = Number(440)
const categoria_3_Dt = Number(330)
const categoria_4_Dt = Number(170)

const categoria_1_Fi = Number(1980)
const categoria_2_Fi = Number(1320)
const categoria_3_Fi = Number(880)
const categoria_4_Fi = Number(330)


//----------------------Dados da Compra---------------------------


let nomeCompleto = prompt('Informe o Seu Nome Completo')
console.log('---Dados da Compra---')
console.log("Nome do Cliente: " + nomeCompleto)

let tipoDeJogo = prompt(`Escolha o Tipo do Jogo que Deja Assistir: IN: (${IN})  ou DO: (${DO})?`)
switch (tipoDeJogo) {
    case 'DO':
        console.log(`Tipo do Jogo: ${DO}`)
        break
    case 'IN':
        console.log(`Tipo do Jogo:  ${IN}`)
        break
}

let etapaDoJogo = prompt(`Informe a Etapa do Jogo que Deseja: SF:  ${SF}, DT: ${DT}, FI: ${FI}`)
switch (etapaDoJogo) {
    case 'SF':
        console.log(`Etapa do Jogo: ${SF}`)
        break
    case 'DT':
        console.log(`Etapa do Jogo: ${DT}`)
        break
    case 'FI':
        console.log(`Etapa do Jogo: ${FI}`)
}

let categoriaDesejada = prompt('Escolha uma Categoria: 1, 2, 3 ou 4')
console.log('Categoria:', categoriaDesejada)

let quantidadeDeIngressos = Number(prompt('Informe a Quantidade de Ingressos que Você Deseja'))
console.log(`Quantidade de Ingressos: ${quantidadeDeIngressos} ingressos`)


//--------------------Cálculo do Valor-----------------------


function valorDoIngresso(categoriaDesejada, etapaDoJogo, tipoDeJogo) {
    if (categoriaDesejada === 1 && etapaDoJogo === SF && tipoDeJogo === DO) {
        console.log(`Valor do Ingresso: R$ ${categoria_1_Sf}`)
    } else if (categoriaDesejada === 2 && etapaDoJogo === SF && tipoDeJogo === DO) {
        console.log(`Valor do Ingresso: R$ ${categoria_2_Sf}`)
    } else if (categoriaDesejada === 3 && etapaDoJogo === SF && tipoDeJogo === DO) {
        console.log(`Valor do Ingresso: R$ ${categoria_3_Sf}`)
    } else if (categoriaDesejada === 4 && etapaDoJogo === SF && tipoDeJogo === DO) {
        console.log(`Valor do Ingresso: R$ ${categoria_3_Sf}`)
    }
    valorDoIngresso(categoriaDesejada, etapaDoJogo, tipoDeJogo)
}

