// Exercício 2
// A complexidade desse algoritmo é O(n), onde "n" é o comprimento da string "source". 
// Como a quantidade de operações realizadas pelo algoritmo é diretamente proporcional ao comprimento da string "source", a complexidade é linear.

export const func = (source: string, comparison: string): boolean => {
    if (comparison.length > source.length + 1 || comparison.length < source.length - 1) {
        return false;
    }

    let commonCharQuantity = 0;

    for (let i = 0; i < source.length; i++) {
        if (source[i] !== comparison[i]) {
            commonCharQuantity++;
        }
        if (commonCharQuantity > 1) {
            return false;
        }
    }
    return true;
};





