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
Porem, se o usuário digitou -10 o código não retornará mensagem alguma */

/* c)Sim, haverá erro no console pois, a variável mensagem não foi criada no bloco 'if' e não pode ser acessada pelo escopo pai.
Portanto, o escopo global (const numero) não consegue acessar o escopo let mensagem */


// --------------------------Exercícios de Escrita de Código 01-----------------------------------


const idade = Number(prompt('Informe a sua idade'));


if (idade >= 18) {
    console.log('Você pode dirigir.')
} else {
    console.log('Você não pode dirigir.')
}



// --------------------------Exercícios de Escrita de Código 02-----------------------------------

let turno = prompt("Informe com M (matutino), V(vespertino) ou N(noturno) o turno que você estuda")

if (turno === "M") {
    console.log("Bom Dia!");
} else if (turno === "V") {
    console.log("Boa Tarde!");
} else if (turno === "N") {
    console.log("Boa Noite!");
} else {
    console.log("Utilize apenas: M,V ou N!")
}

// --------------------------Exercícios de Escrita de Código 03-----------------------------------

let turno2 = prompt('Informe com M, V ou N o turno que você estuda')

switch (turno2) {
    case 'M':
        console.log('Bom Dia!');
        break;
    case 'V':
        console.log('Boa Tarde!');
        break;
    case 'N':
        console.log('Boa Noite!');
        break;
    default:
        console.log("Utilize apenas: M,V ou N!")
        break
}

// --------------------------Exercícios de Escrita de Código 04-----------------------------

let genero = prompt('Qual o gênero de filme deseja assistir?')
let valor = Number(prompt('Qual o preço do ingresso?'))

function assiteFilmeSe(genero, valor) {
    if (genero === 'fantasia' && valor < 15) {
        console.log('Bom Filme!')
    } else {
        console.log("Escolha outro filme :(")
    }
}
assiteFilmeSe(genero, valor)

// ---------------------------------Desafio Opcional 01-----------------------------------

let genero2 = prompt('Qual o gênero de filme deseja assistir?')
let valor2 = Number(prompt('Qual o preço do ingresso?'))
let lanchinho = prompt('Qual lanchinho vai comprar?')

if (genero2 === 'fantasia' && valor2 < 15) {
    console.log('Bom Filme!')
    console.log(`Aproveite o seu ${lanchinho}!`)
} else {
    console.log('Escolha outro filme :(')
}

// ---------------------------------Desafio Opcional 02-----------------------------------


const IN = "Internacional"
const DO = "Nacional"

const SF = "Semi-final"
const DT = "Decisão de 3º lugar"
const FI = "Final"

let nomeCompleto = prompt('Informe o Seu Nome Completo')
let tipoDeJogo = prompt(`Escolha o Tipo do Jogo que Deja Assistir: IN: ${IN}  ou DO: ${DO}?`)
let etapaDoJogo = prompt(`Informe a Etapa do Jogo que Deseja: SF:  ${SF}, DT: ${DT}, FI: ${FI}`)
let categoriaDoJogo = Number(prompt('Informe a Categoria do Jogo que Deseja Assistir: 1,2,3,4'))
let quantidadeDeIngressos = Number(prompt('Informe a Quantidade de Ingressos que Você Deseja'))

let valorDoIngresso
switch (etapaDoJogo) {
    case 'SF':
        switch (categoriaDoJogo) {
            case 1:
                valorDoIngresso = 1320;
                break;
            case 2:
                valorDoIngresso = 880;
                break;
            case 3:
                valorDoIngresso = 550;
                break;
            case 4:
                valorDoIngresso = 220;
                break;
            default:
                'Escolha Uma Opção Válida!';
                break;
        }
        break;

    case 'DT':
        switch (categoriaDoJogo) {
            case 1:
                valorDoIngresso = 660;
                break;
            case 2:
                valorDoIngresso = 440;
                break;
            case 3:
                valorDoIngresso = 330;
                break;
            case 4:
                valorDoIngresso = 170;
                break;
            default:
                'Escolha Uma Opção Válida!';
                break;
        }
        break;

    case 'FI':
        switch (categoriaDoJogo) {
            case 1:
                valorDoIngresso = 1980;
                break;
            case 2:
                valorDoIngresso = 1320;
                break;
            case 3:
                valorDoIngresso = 880;
                break;
            case 4:
                valorDoIngresso = 330;
                break;
            default:
                'Escolha Uma Opção Válida!';
                break;
        }
        break;
    default:
        break;
}

if (tipoDeJogo === "IN") {
    valorDoIngresso = valorDoIngresso * 4.1;
}


let Nacional_Internacional;
switch (tipoDeJogo) {
    case "DO":
        tipoDeJogo = "Nacional";
        break;
    case "IN":
        tipoDeJogo = "Internacional";
        break;
    default:
        'Escolha Uma Opção Válida!';
        break;
}

let etapaDoJogoInt;
switch (etapaDoJogo) {
    case "SF":
        etapaDoJogo = "Semi-Final";
        break;
    case "DT":
        etapaDoJogo = "Decisão de 3º lugar";
        break;
    case "FI":
        etapaDoJogo = "Final";
        break;
    default:
        etapaDoJogo = 'Escolha Uma Opção Válida!';
        break;
}

console.log('---Dados da Compra---');
console.log(`Nome do Cliente: ${nomeCompleto}`);
console.log(`Tipo do Jogo: ${tipoDeJogo}`);
console.log(`Etapa do Jogo: ${etapaDoJogo}`);
console.log(`Categoria: ${categoriaDoJogo}`)
console.log(`Quantidade de Ingressos: ${quantidadeDeIngressos}`);
console.log('---Valores---');
console.log("Valor do Ingresso:", Number(valorDoIngresso));
console.log('Valor Total da Compra:', Number(valorDoIngresso * quantidadeDeIngressos));