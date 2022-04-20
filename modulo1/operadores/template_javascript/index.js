//Exercícios de interpretação de código

//1.a-false b-false c-true d-Boolean

//2- Será impresso o numeral 11 porque o tipo da variável é string.

//*3- Para que o problema seja resolvido é necessário converter as variáveis de string para Number


//Exercícios de escrita de código n.1

//Pergunte a idade do usuário
let idadeDoUsuario = Number(prompt("Qual a sua idade?"));
console.log("1.a", idadeDoUsuario);

//Pergunte a idade do seu melhor amigo(a)
let idadeDoMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"));
console.log("1.b", idadeDoMelhorAmigo);

/*c)Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta 
(true ou false)*/
console.log("Sua idade é maior do que a do seu melhor amigo (a)?");
console.log("1.c", idadeDoUsuario > idadeDoMelhorAmigo);

//Imprima na console a diferença de idade
resultado = idadeDoUsuario - idadeDoMelhorAmigo;
console.log("1.d", resultado);

//Exercícios de escrita de código n.2

//Peça ao usuário que insira um número par
let numeroPar = Number(prompt("Digite um número par!"));
console.log("2.a", numeroPar);

//Imprima na console o resto da divisão desse número por 2
let resto = numeroPar % 2;
console.log("2.b", resto);

/*2.c A partir do teste com diversos números abaixo, notei que como padrão o resto da divisão de um número par dividido 
por 2 sempre será 0 */
let resultado1_c
console.log("resto da divisão de 20 % 2 é", 20 % 2);

let resultado2_c
console.log("resto da divisão de 16 % 2 é", 16 % 2);

let resultado3_c
console.log("resto da divisão de 12 % 2 é", 12 % 2);

/*2.d Como padrão o resto da divisão de um número impar dividido 
por 2 sempre será 1*/
let resultado1_d
console.log("resto da divisão de 19 % 2 é", 19 % 2);

let resultado2_d
console.log("resto da divisão de 13 % 2 é", 13 % 2);

let resultado3_d
console.log("resto da divisão de 11 % 2 é", 11 % 2);


/*Exercícios de escrita de código n.3
Pergunta ao usuário sua idade em anos. 
Depois, imprime no console: */

let idadeDoUsuarioAnos = prompt("Quantos anos você tem?");
console.log("Você tem", idadeDoUsuarioAnos, "anos");

//a) A idade do usuário em meses
console.log(idadeDoUsuarioAnos * 12, "meses");

//b) A idade do usuário em dias
console.log(idadeDoUsuarioAnos * 365.25, "dias");

//c) A idade do usuário em horas
console.log(idadeDoUsuarioAnos * 8766, "horas");


/*Exercícios de escrita de código n.4
Faça um programa que pergunte ao usuário dois números */

//O primeiro numero é maior que segundo?
let n1 = Number(prompt("Digite um número!"));
let n2 = Number(prompt("Digite outro número"));
console.log("O primeiro numero é maior que segundo?", n1 > n2);

//O primeiro número é igual ao segundo?
console.log("O primeiro numero é igual ao segundo?", n1 === n2);

//O primeiro número é divisível pelo segundo?
console.log("O primeiro numero é divisível pelo segundo?", n1 === n2);

//O segundo número é divisível pelo primeiro?
console.log("O segundo numero é divisível pelo primeiro?", n2 === n1);