// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = prompt("Digite a altura de um retângulo");
    const largura = prompt("Digite a largura desse retângulo");
    const areaDoRetangulo = altura * largura;
    console.log(areaDoRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const anoAtual = prompt("Digite o ano atual");
    const anoDeNascimento = prompt("Digite o seu ano de nascimento");
    const idade = anoAtual - anoDeNascimento;
    console.log(idade);
}

// EXERCÍCIO 03  
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    IMC = peso / (altura * altura);
    return IMC
}
calculaIMC(70, 1.7)
console.log(IMC)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    //const nome = prompt("Digite o seu nome");
    //const idade = prompt("Digite a sua idade");
    //const email = prompt("Digite o seu email");
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    let cor1 = prompt("Informe sua primeira cor favorita");
    let cor2 = prompt("Informe sua segunda cor favorita");
    let cor3 = prompt("Informe sua terceira cor favorita");

    let respcor1 = cor1;
    let respcor2 = cor2;
    let respcor3 = cor3;

    console.log([cor1, cor2, cor3]);

}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    return string.toUpperCase();
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    let ingressosVendidosZeraPrejuizo = custo / valorIngresso;
    return ingressosVendidosZeraPrejuizo;

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
    const tamanhoString1 = string1.length;
    const tamanhoString2 = string2.length;
    const trueFalse = tamanhoString1 === tamanhoString2;
    return trueFalse;
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    return array.shift()
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    return array.pop()
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const elementos = [1, 2, 3, 4, 5]
    console.log(elementos)
    elementos[0] = 5
    elementos[4] = 1
    console.log(elementos)

    return elementos
}
trocaPrimeiroEUltimo(array)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    const palavraMaiuscula1 = string1.toUpperCase()
    console.log(palavraMaiuscula1)
    const palavraMaiuscula2 = string2.toUpperCase()
    console.log(palavraMaiuscula1)
    const resComparacao = palavraMaiuscula1 === palavraMaiuscula2;
    console.log(resComparacao)
    return resComparacao
}
checaIgualdadeDesconsiderandoCase(string1, string2)


// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui

}