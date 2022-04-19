//Exercícios de interpretação de código

//1.a-false b-false c-true d-Boolean

//2- Será impresso o numeral 11 porque o tipo da variável é string.

//*3- Para que o problema seja resolvido é necessário converter as variáveis de string para Number


//Exercícios de escrita de código n.1

//Pergunte a idade do usuário
//let idadeDoUsuario = Number(prompt("Qual a sua idade?"));
//console.log("1.a", idadeDoUsuario);

//Pergunte a idade do seu melhor amigo(a)
//let idadeDoMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"));
//console.log("1.b", idadeDoMelhorAmigo);

/*c)Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta 
(true ou false)*/
//console.log("Sua idade é maior do que a do seu melhor amigo (a)?");
//console.log("1.c", idadeDoUsuario > idadeDoMelhorAmigo);

//Imprima na console a diferença de idade
//resultado = idadeDoUsuario - idadeDoMelhorAmigo;
//console.log("1.d", resultado);

//Exercícios de escrita de código n.2

//Peça ao usuário que insira um número par
//let numeroPar = Number(prompt("Digite um número par!"));
//console.log("2.a", numeroPar);

//Imprima na console o resto da divisão desse número por 2
//let resto = numeroPar % 2;
//console.log("2.b", resto);

/*2.c A partir do teste com diversos números abaixo, notei que como padrão o resto da divisão de um número par dividido 
por 2 sempre será 0 */
//let resultado1_c
//console.log("resto da divisão de 20 % 2 é", 20 % 2);

//let resultado2_c
//console.log("resto da divisão de 16 % 2 é", 16 % 2);

//let resultado3_c
//console.log("resto da divisão de 12 % 2 é", 12 % 2);

/*2.d Como padrão o resto da divisão de um número impar dividido 
por 2 sempre será 1*/
//let resultado1_d
//console.log("resto da divisão de 19 % 2 é", 19 % 2);

//let resultado2_d
//console.log("resto da divisão de 13 % 2 é", 13 % 2);

//let resultado3_d
//console.log("resto da divisão de 11 % 2 é", 11 % 2);


/*Exercícios de escrita de código n.3
Pergunta ao usuário sua idade em anos. 
Depois, imprime no console: */

//let idadeDoUsuarioAnos = prompt("Quantos anos você tem?");
//console.log("Você tem", idadeDoUsuarioAnos, "anos");

//a) A idade do usuário em meses
//console.log(idadeDoUsuarioAnos * 12, "meses");

//b) A idade do usuário em dias
//console.log(idadeDoUsuarioAnos * 365.25, "dias");

//c) A idade do usuário em horas
//console.log(idadeDoUsuarioAnos * 8766, "horas");


/*Exercícios de escrita de código n.4
Faça um programa que pergunte ao usuário dois números */

//O primeiro numero é maior que segundo?
//let n1 = Number(prompt("Digite um número!"));
//let n2 = Number(prompt("Digite outro número"));
//console.log("O primeiro numero é maior que segundo?", n1 > n2);

//O primeiro número é igual ao segundo?
//console.log("O primeiro numero é igual ao segundo?", n1 === n2);

//O primeiro número é divisível pelo segundo?
//console.log("O primeiro numero é divisível pelo segundo?", n1 === n2);

//O segundo número é divisível pelo primeiro?
//console.log("O segundo numero é divisível pelo primeiro?", n2 === n1);

//Desafio | Exercício n.1

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//(CELSIUS) = (GRAUS_FAHRENHEIT - 32)

/*a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade
 no console também.*/
//let tempKelvin = (77 - 32) * (5 / 9) + 273.15;
//console.log("A temperatura de 77ºF para Kelvin é:", tempKelvin, "ºK");

/*b) Calcule e mostre o valor de 80°C em °F, mostrando 
a unidade no console também*/
//let tempFahrenheit = 80 * (9 / 5) + 32;
//console.log("A temperatura de 80ºC em Fahrenheit é:", tempFahrenheit, "ºF");

//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
//let tempFahrenheit = 30 * (9 / 5) + 32;
//console.log("A temperatura de 30ºC em Fahrenheit é:", tempFahrenheit, "ºF.", "E em graus Kelvin é:", (tempFahrenheit - 32) * (5 / 9) + 273.15, "ºK.");

/*d) Altere o último item para que o usuário insira o valor 
em graus Celsius que ele deseja converter
let tempUsuario = Number(prompt("Digite um temperatura em ºC"));
let tempKelvin = tempUsuario + 273.15;
let tempFahrenheit = tempUsuario * (9 / 5) + 32;
console.log("A temperatura de Celsius para Fahrenheit é:", tempFahrenheit, "ºF.", "E em graus Kelvin é:", tempKelvin, "ºK.");*/

/*Exercício n.2 
Faça um programa que receba a quantidade de quilowatts consumida 
por uma residência.*/
/*a) Calcule e mostre o valor a ser pago por uma residência que 
consuma 280 quilowatt-hora. Sabe-se que o quilowatt-hora de 
energia custa R$0.05.*/
//let quantKiloWatts = 280;
//let custoKiloWattsHora = 0.05;
//const valorSemDesconto = quantKiloWatts * custoKiloWattsHora;
//console.log('a)', "O valor a ser pago é igual a ", valorSemDesconto, "reais");

//let valorDoDesconto = valorSemDesconto * 0.15;
//let valorComDesconto = valorSemDesconto - valorDoDesconto;
//console.log('b)', "O valor a ser pago com desconto é igual a ", valorComDesconto, "reais");

//Exercício n.3
/*a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva 
um programa que converta 20lb para kg. Imprima  a resposta no console da 
seguinte forma: 20lb equivalem a X kg*/

//Fórmula libra para kilograma: x / 0,45 = y libras;
//let libra = 20;
//const kilograma = 20 * 0.453592;
//console.log('a)', "20lb equivalem a ", kilograma, "kg")

/*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um 
programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte 
forma: 10.5oz equivalem a X kg*/
//let oz = 10.5;
//const Kg = oz / 35.274;
//console.log('b',"10.5oz equivalem a", Kg, "Kg.");

/*c) Procure uma forma de converter milha (mi) para metro (m) e escreva um 
programa que converta 100mi para m. Imprima  a resposta no console da 
seguinte forma: 100 mi equivalem a X m*/
//let milha = 100;
//const metros = milha * 1.609;
//console.log('c)', "100 mi equivalem a", metros, "m.");

/*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um 
programa que converta 50ft para m. Imprima  a resposta no console da seguinte
forma: 50ft equivalem a X m*/
//let foot = 50;
//const metros = foot * 0.3048;
//console.log('d)', "50ft equivalem a", metros, "m.");

/*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um 
programa que converta 103.56gal para litro. Imprima  a resposta no console da 
seguinte forma: 103.56gal equivalem a X l*/
//let gal = 103.56;
//const litros1 = gal * 3.7854;
//console.log('d)', "103.56gal equivalem a", litros, "l.");

/*f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um 
programa que converta 450xic para litro. Imprima  a resposta no console da 
seguinte forma: 450 xic equivalem a X l*/
//let xic = 450;
//const litros2 = xic * 0.24;
//console.log('f)', "450 xic equivalem a", litros2, "l.");

/*g) Escolha ao menos um dos itens anteriores e modifique o programa para que 
ele peça ao usuário o valor da unidade original antes de converter*/
//let valorDoUsuario = Number(prompt("Digite um valor em litros"));
//const xic = valorDoUsuario * 4.1666667;
//console.log('g)', valorDoUsuario, "litros,", "equivalem a", xic, "xic.");