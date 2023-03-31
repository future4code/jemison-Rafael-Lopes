// Escreva uma função recursiva que

// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
const printNumbers1 = (n: number) => {
    if (n >= 0) {
      printNumbers1(n - 1);
      console.log(n);
    }
  };

// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
const printNumbers2 = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbers2(n - 1);
    }
  };