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


