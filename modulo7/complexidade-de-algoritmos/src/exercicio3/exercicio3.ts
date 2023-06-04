// Exercício 3
// R: A complexidade do algoritmo é constante O(1), pois o tempo de execução não varia com o tamanho da matriz. 

export const replaceMatrixValue = (matrix: number[][], rowIndex: number, columnIndex: number, value: number): void => {
    if (matrix[rowIndex] === undefined || matrix[rowIndex][columnIndex] === undefined) {
        throw new Error("Fora do intervalo da matriz");
    }
    matrix[rowIndex][columnIndex] = value;
};