// Exercício 4
// R: A complexidade de tempo desse algoritmo é O(n²), pois ele usa dois laços aninhados que percorrem a lista de números. 
// O tempo de execução cresçe proporcionalmente ao quadrado do tamanho da lista.

export function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
            return true;
        }
    }
    return false;
};


