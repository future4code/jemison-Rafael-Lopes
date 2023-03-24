import { verifyIfExistRepeatedNumbers } from "./exercicio4";

const listOfNumers = [1, 2, 3, 4, 5, 1, 7, 6, 8];

const i = performance.now()
console.log('Resposta: ', verifyIfExistRepeatedNumbers(listOfNumers));
const f = performance.now()
console.log('Tempo: ', f - i);
