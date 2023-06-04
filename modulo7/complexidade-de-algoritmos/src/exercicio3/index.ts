import { replaceMatrixValue } from "./exercicio3";

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const rowIndex = 1;
const columnIndex = 2;
const value = 10;

replaceMatrixValue(matrix, 1, 1, 10)
replaceMatrixValue(matrix, 0, 2, -1)
// replaceMatrixValue(matrix, -1, -1, -1) // Fora do intervalo da matriz
console.log("Resultado: ", matrix)

const i = performance.now()
replaceMatrixValue(matrix, rowIndex, columnIndex, value);
const f = performance.now()
console.log("Tempo: ", f - i);