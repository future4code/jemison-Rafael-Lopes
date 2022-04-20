//Exercício de Interpretação de Código n.1

//a) Undefined; b) null; c) 11 elementos; d) Erro: array is not defined; e) Erro: array is not defined; f) Erro: array is not defined;

/*Exercício n.2
SUBI NUM ÔNIBUS EM MIRROCOS; 27*/

//Exercício de Escrita de Código n.1
let nomeDoUsuario = prompt("Qual o seu nome?");
let emailDoUsuario = prompt("Qual o seu email?");
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o),${nomeDoUsuario}!`);

//Exercício de Escrita de Código n.2
const listaComidasFavoritas = ["lasanha", "macarrão", "feijoada", "rocomboli", "pizza"];
console.log('a.', listaComidasFavoritas);
console.log('b.', "Essas são as minhas comidas preferidas: ", listaComidasFavoritas);

const comidaFavoritaDoUsuario = prompt("Qual a sua comida favorita?");
const novaLista = listaComidasFavoritas.replaceAll(comidaFavoritaDoUsuario);
console.log('c.', "Essa é minha nova lista de comidas favoritas:", listaComidasFavoritas);


//Exercício n.3
//a) Criar array vazia e guardá-la na variável 'listaDeTarefas'
const listaDeTarefas = [];
//b) Perguntar 3 tarefas que o usuário precisa realizar no dia
const tarefasNecessarias1 = prompt("Informe uma tarefa que você precisa realizar no seu dia ?");
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
const resposta = escolherIndice.splice(escolherIndice);
//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array no console