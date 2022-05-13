// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    return array.length
}
console.log(retornaTamanhoArray([3, 2, 1, 4, 7]))

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    return array.sort(function(a, b) {
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = array.filter(array => array % 2 === 0);
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numeros = array.filter(array => array % 2 === 0);
    return numeros.map(function(pares) {
        return Math.pow(pares, 2);
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    return maiorNumero
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = [];
    for (let i = 0; primeirosPares.length < n; i++) {
        if (i % 2 === 0) {
            primeirosPares.push(i);
        }
    }
    return primeirosPares;
}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    // usar loops e if

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}