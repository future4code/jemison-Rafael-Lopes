const ladoA = 5;
const ladoB = 5;
const ladoC = 15;
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero:";
    }
    else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(5, 5, 10));
//# sourceMappingURL=exercicio1.js.map