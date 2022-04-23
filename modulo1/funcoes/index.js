//--------------Exercício de Interpretação 1--------------------

//a)Será impresso 10 e 50 respectivamente

//b)Não retornará nemhum valor

//--------------Exercício de Interpretação 2--------------------

//a)Funcionalidade da função
/*Resposta: Solicitar um texto do usuário, transforma-lo em 
frase tudo minuscula e incluir no texto a palavra cenoura*/

//b)Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.Eu gosto de cenoura
//ii.CENOURA é bom pra vista
//iii.Cenouras crescem na terra


//--------------Exercício de Escrita de Código 1--------------------
//a)
function sobreMim() {
    console.log('1.a)', "Eu sou Rafael, tenho 39 anos, moro em Goiânia e sou estudante.");

}
sobreMim()

//b)
function informacoesPessoais() {
    const nome = "Rafael"
    const idade = 39
    const cidade = "Goiania"
    const profissao = "Advogado"
    console.log('1.b)', `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`);

}
informacoesPessoais()

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
maiorOuIgual(10, 15) //false*/

//c)
function parOuImpar() {
    let n = Number(prompt("Digite um número"));
    let operacao = n % 2;
    console.log(operacao)

}
parOuImpar()

//d)
function mensagem() {
    const string = "Amanhã será um dia melhor!"
    console.log(string)
    console.log('2.d)', "O tamanho da mensagem é:", string.length);
    console.log("A frase em tudo maiusculo é:", string.toUpperCase());
}
mensagem()

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