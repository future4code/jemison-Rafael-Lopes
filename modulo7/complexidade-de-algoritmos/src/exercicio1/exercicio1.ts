// Exercício 1
// Determine a complexidade dos seguintes algoritmos, deixando a sua resposta comentada no código.

// R: A complexidade de tempo neste algoritmo é O(n), pois ele realiza 3n operações básicas para uma entrada de string de comprimento n. 
// Além disso, a complexidade de espaço também é O(n), pois ele aloca memória para n caracteres no mapa hash no pior cenário."

export const findFirstRecurringCharacter = (input: string): string | null => {
    const charHashMap: {[key: string]: boolean} = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  };