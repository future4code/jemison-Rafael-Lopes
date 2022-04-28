//Exercício de Interpretação de Código n.1

//a) Undefined; b) null; c) 11 elementos; d) 3; e) [3,19,5,6,7,8,9,10,11,12,13]; f)9 ;

//Exercício n.2
//SUBI NUM ÔNIBUS EM MIRROCOS; 27

//Exercício de Escrita de Código n.1
let nomeDoUsuario = prompt("Qual o seu nome?");
let emailDoUsuario = prompt("Qual o seu email?");
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o),${nomeDoUsuario}!`);

//Exercício de Escrita de Código n.2
//Define lista com minhas 5 comidas preferidas
const listaDeComidasPreferidas = ["lasanha", "macarrão", "feijoada", "rocomboli", "pizza"];

//a)Imprime no console o array completo
console.log('a.', listaDeComidasPreferidas);

//b)Imprime mensagem: "Essas são as minhas comidas favoritas"
//Seguida por cada uma das comidas, uma debaixo da outra

console.log('b.', "Essas são as minhas comidas preferidas: ");
console.log('1.', listaDeComidasPreferidas[0]);
console.log('2.', listaDeComidasPreferidas[1]);
console.log('3.', listaDeComidasPreferidas[2]);
console.log('4.', listaDeComidasPreferidas[3]);
console.log('5.', listaDeComidasPreferidas[4]);

//c)Pergunta ao usuário uma comida preferida
const comidaFavoritaDoUsuario = prompt("Qual a sua comida favorita?");

//Troca a segunda comida pela inserida pelo usuário
listaDeComidasPreferidas[1] = comidaFavoritaDoUsuario;

//Imprime o array no console
console.log(listaDeComidasPreferidas);

//Exercício n.3
//a) Cria array vazia e guarda na variável 'listaDeTarefas'
const listaDeTarefas = [];

//b) Pergunta 3 tarefas que o usuário precisa realizar no dia
//Armazena as 3 tarefas na variável lista de tarefas
const tarefasNecessaria1 = prompt("Informe uma tarefa que você precisa realizar no seu dia ?");
listaDeTarefas.push(tarefasNecessaria1);

const tarefasNecessaria2 = prompt("Informe uma segunda tarefa que você precisa realizar no seu dia ?");
listaDeTarefas.push(tarefasNecessaria2);

const tarefasNecessaria3 = prompt("Informe uma terceira tarefa que você precisa realizar no seu dia ?");
listaDeTarefas.push(tarefasNecessaria3);

//c)Imprime o array no console
console.log(listaDeTarefas)

//d)Pede ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
const escolheIndice = prompt("Escolha um índice de 0 a 2 ")

//e)Remove da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(escolheIndice, 1) //Remove o(s) ítem(ns) a partir de n índice escolhido

//f) Imprima o array no console
console.log(listaDeTarefas);

//-----------Desafios-------------

//1. Retorna um array onde cada elemento é uma das palavras da frase
//ignora os espaços

const frase = "Hoje vai ser um excelente dia para aprender JS"
const fraseSplit = frase.split("");
console.log(fraseSplit);

//2. Acha índice da palavra abacaxi e o imprime
//Aponta o tamanho do array
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(frutas.indexOf("Abacaxi"), ", tamanho do array: ", frutas.length);