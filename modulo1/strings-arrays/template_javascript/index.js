//Exercício de Interpretação de Código n.1

//a) Undefined; b) null; c) 11; d) Erro: array is not defined; e) Erro: array is not defined; f) Erro: array is not defined;

/*Exercício n.2
SUBI NUM ÔNIBUS EM MIRROCOS; 27*/

/*Exercício de Escrita de Código n.1
let nomeDoUsuario = prompt("Qual o seu nome?");
let emailDoUsuario = prompt("Qual o seu email?");
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o),${nomeDoUsuario}!`);*/

//Exercício de Escrita de Código n.2
//const listaComidasFavoritas = ["lasanha", "macarrão", "feijoada", "rocomboli", "pizza"];
//console.log('a.', listaComidasFavoritas);
//console.log('b.', "Essas são as minhas comidas preferidas: ", listaComidasFavoritas);**falta colocar um debaixo do outro

/*const comidaFavoritaDoUsuario = prompt("Qual a sua comida favorita?");
const novaLista = listaComidasFavoritas.replaceAll("macarrão", comidaFavoritaDoUsuario);
console.log('c.', "Essa é minha nova lista de comidas favoritas:", listaComidasFavoritas); NÃO CONSEGUI FAZER A TROCA PELO O QUE O USUÁRIO DIGITOU*/

//Exercício n.3
//a) Criar array vazia e guardá-la na variável 'listaDeTarefas'
//const listaDeTarefas = [];
/*b) Perguntar 3 tarefas que o usuário precisa realizar no dia
const tarefasNecessarias1 = prompt("Informe uma tarefa que você precisa realizar no seu dia ?"); //Quesito b
const tarefasNecessarias2 = prompt("Informe uma segunda tarefa que você precisa realizar no seu dia ?");
const tarefasNecessarias3 = prompt("Informe uma terceira tarefa que você precisa realizar no seu dia ?");
const resposta1 = [tarefasNecessarias1];
const resposta2 = [tarefasNecessarias2];
const resposta3 = [tarefasNecessarias3];
//c)Imprime o array no console
console.log(`A sua primeira tarefa é: ${resposta1}`); //Quesito c
console.log(`A sua segunda tarefa é: ${resposta2}`);
console.log(`A sua terceira tarefa é: ${resposta3}`);

//d) Pede ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
const escolherIndice = prompt("Escolha um índice de 0 a 2 para escolher uma tarefa realizada")
    //e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array no console*/


//Atividades da Aula sobre Strings e Arrays

/*let nomeDoUsuario = prompt("Informe o seu nome");
const corFavorita = prompt("Informe a sua cor favorita");
let frase = "A cor favorita de " + nomeDoUsuario + " é " + corFavorita + ".";
let template = `A cor favorita de ${nomeDoUsuario} é ${corFavorita}.`;
console.log(frase);
console.log(template);*/

/*const nome = "Rafael Lopes";
console.log(nome, nome.length);
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());*/

/*const email = "  rafaelramos923@gmail.com    ";
console.log(email);
console.log(email.trim());*/

//Exemplos com INCLUDES
/*const frase = "Hoje comi cenouras";
frase.includes("cenouras");
frase.includes("batatas");
console.log(frase.includes("cenouras"));
console.log(frase.includes("batatas"));*/

//Exemplos com replaceAll
/*const frase = "Hoje acordei às nove horas da manhã";
const novaFrase = frase.replaceAll("manhã", "tarde");
console.log(frase);
console.log(novaFrase)

let fraseDoUsuario = prompt("Escreva uma frase");
console.log(fraseDoUsuario.toUpperCase());
console.log(fraseDoUsuario.replaceAll('o', 'i'));
console.log(fraseDoUsuario.length);*/

//Selencionado elementos no Array

/*const listaDeDesejos = ["emprego", "saúde", "alegria", "riquezas"]
const segundoItem = listaDeDesejos[1];
console.log(listaDeDesejos[1]);*/

//---------------------------------////------------------------------------/
const racasDeCachorro = ["Dobermam", "Pitbull", "Pastor alemão", "Pinscher", "Poodle"];
/*let numeroDoUsuario = prompt("Escolha um número de 1 a 5");
console.log('A escolha do usuário é', racasDeCachorro[numeroDoUsuario - 1]);*/
//---------------------------------///-------------------------------------/


/*Uso de length para contar elementos
console.log(racasDeCachorro.length)*/

//Uso do includes(elemento). Retorna true ou false
//console.log(racasDeCachorro.includes("Poodle"))

/*Uso do pop() remove o ultimo elemento de um array
racasDeCachorro.pop();
console.log(racasDeCachorro);*/

/*Uso do splice(i, n) remove n elementos à partir da posição i do array
racasDeCachorro.splice(0, 1);
console.log(racasDeCachorro)*/

/*Uso do push(elemento). Adiciona um ou mais elementos ao final de um array
racasDeCachorro.push("Vira-latas");
console.log(racasDeCachorro);*/

//Exercício 04

const valores = [1, 2, 3, 4, 5, 6];
console.log(valores.length);
valores.push(7);
console.log(valores)
valores.splice(3, 2)
console.log(valores)
console.log(valores.length);