//1 . Resposta: serão impressos os valores 10, 10 e 5

//2 . Resposta: serão impressos os valores 10, 10 e 10
/*3. Entender o que o comando faz e sugerir
 melhores nomes para as variáveis */
//Resposta: O comando solicita informações do usuário. Apenas não sei porque o resultado da operação está incorreto
let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?");
let remuneraçãoPorDia = prompt("Quanto você recebe por dia?");
alert(`Voce recebe ${horasTrabalhadasDia/remuneraçãoPorDia} por hora`);

//Exercícios de escrita

let nome; //1.a) - Declara uma variável para armazenar um nome. Não atribui valor
let idade; //b) - Declara uma variável para armazenar uma idade. Não atribui valor
console.log(typeof nome); //c) undefined não houve atribuição de valor
console.log(typeof idade); //d)undefined não houve atribuição de valor

//e)Pergunta ao usuário seu nome
nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

//f)Imprime o tipo das variáveis
console.log(typeof nome); //string
console.log(typeof idade); //string

//g) Imprime na tela mensagem
console.log("Olá ", nome, "você tem", idade, " anos.");

//2.a e b)Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável
let corDaRoupa = prompt("Você está vestindo a cor azul?");
console.log(corDaRoupa);
let tipoDeTecido = prompt("Sua roupa é de algodão?");
console.log(tipoDeTecido);
let doarRoupa = prompt("Você doaria essa roupa?");
console.log(doarRoupa);

//3 Resultado após a troca do valor de a e b
let a = 10;
let b = 25;
let c = a;
b = 10;
c = 25;
a = c;
console.log("O novo valor de a é", a); // O novo valor de a é 25 
console.log("O novo valor de b é", b); // O novo valor de b é 10
console.log(a, b);

//Desafio Opcional 1
let n1 = Number(prompt("Digite um número"));
let n2 = Number(prompt("Digite outro número"));
somatorio = n1 + n2;
multiplica = (n1 * n2);
console.log("O primeiro número somado ao segundo número resulta em:", somatorio);
console.log("O primeiro número multiplicado ao segundo número resulta em:", multiplica);