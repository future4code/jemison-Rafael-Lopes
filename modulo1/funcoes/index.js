//--------------Exercício de Interpretação 1--------------------

//a)Será impresso 10 e 50 respectivamente

//b)Não retornará nemhum valor

//--------------Exercício de Interpretação 2--------------------

//a)Funcionalidade da função

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

/*Resposta: Solicitar um texto do usuário, transforma-lo em 
frase tudo minuscula e verifica se no texto há alguma ocorrência da
palavra cenoura*/

//b)Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.Eu gosto de cenoura //Retorna: true 
//ii.CENOURA é bom pra vista //Retorna: true
//iii.Cenouras crescem na terra //Retorna: true


//--------------Exercício de Escrita de Código 1--------------------
//a)Sem receber parâmetros
const nome = "Rafael"
const idade = 39
const cidade = "Goiânia"
const estudante = "sou estudante"

function sobreMim() {
    console.log('1.a)', `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`)
}
sobreMim()

//b)Recebe 4 parâmetros(nome, idade, cidade e profissão)
function novaFuncao(nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}
const frase = novaFuncao("Rafael", 39, "Aparecida de Goiânia", "advogado.")
console.log(frase);

//--------------Exercício de Escrita de Código 2--------------------

//a) 
function somaDeDoisNumeros(n1, n2) {
    const resultadoDaSoma = n1 + n2;
    console.log('a)Resultado da soma é: ', resultadoDaSoma);
}
somaDeDoisNumeros(10, 15);

//b)
function maiorOuIgual(num1, num2) {
    console.log('2.b)', num1 >= num2);
}
maiorOuIgual(35, 30) //true - 35 maior que 30

//c)
function verificarParidade(numero) {
    return numero % 2 === 0
}
const parOuImpar = verificarParidade(5);
console.log('c)', parOuImpar) // Se false o valor digitado foi impar se não, par.

//d)
function mensagem() {
    const string = "Amanhã será um dia melhor!"
    console.log(string)
    console.log('2.d)', "O tamanho da mensagem é:", string.length);
    console.log("A frase em tudo maiusculo é:", string.toUpperCase());
}
mensagem()

//Outra forma de escrever a mesma função

function retornaTamanho(texto) {
    return `${texto.length}, ${texto.toUpperCase()}`
}
console.log('d) Outra forma de escrever a função: O tamanho do texto é', retornaTamanho("Amanhã será um dia melhor!"))

//--------------Exercício de Escrita de Código 3--------------------
//soma
function soma() {
    numero1 = Number(prompt("Digite um número qualquer"));
    numero2 = Number(prompt("Digite outro número qualquer"))

    const resultDaSoma = numero1 + numero2;
    console.log("Números inseridos:", numero1, "e", numero2)

    console.log("Soma:", resultDaSoma);
}
soma()

//Subtração
function subtracao() {
    const resultadoDaSubtracao = numero1 - numero2;
    console.log("Subtração:", resultadoDaSubtracao);
}
subtracao()

//Multiplicação
function multiplicacao() {
    const resultadoDaMultiplicacao = numero1 * numero2;
    console.log("Multiplicação:", resultadoDaMultiplicacao);
}
multiplicacao()

//Divisão
function divisao() {
    const resultadoDaDivisao = numero1 / numero2;
    console.log("Divisão:", resultadoDaDivisao);
}
divisao()