// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

let minhaString: string = "Hello World!"
// let minhaString:string = 9

// Resposta: Se atribuir um número a uma variável que foi tipada como string, o TypeScript informará que:
// 'O tipo número não é atribuível ao tipo string'.
// console.log(minhaString);

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
let meuNumero: number = 10
// Como fazer para que essa variável também aceite strings? Ou seja, 
// como criamos no typescript uma variável que aceite mais de um tipo de valor?

// Resposta: Para que uma variável aceite mais de um tipo de valor, usa-se o 'Union Type'.
// Ex:
let meuNumero2: number | string = "dez"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

const pessoa1: Pessoa = { nome: 'Rafael', idade: 39, corFavorita: 'azul' };
const pessoa2: Pessoa = { nome: 'Ane', idade: 36, corFavorita: 'Lilás' };
const pessoa3: Pessoa = { nome: 'Rodolpho', idade: 20, corFavorita: 'verde' };

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum AlteraCoresFavoritas {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    VIOLETA = "violeta",
    ANIL = "anil"
}

const novaCorFavorita = {
    corFavorita: AlteraCoresFavoritas.ANIL
}

console.log(AlteraCoresFavoritas);
