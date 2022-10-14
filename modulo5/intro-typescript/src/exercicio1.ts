// A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo:
// ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno.
// Refatore a função para o Typescript.

const ladoA: number = 5
const ladoB: number = 5
const ladoC: number = 15

function checaTriangulo(a: number, b: number, c: number):string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(5, 5, 10));


