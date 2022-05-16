// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    return array.length
}

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
        return pares ** 2
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

    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {

    var segundoMaior = [array[0]];
    var resultado = [];

    array.sort(function(a, b) {
        return a - b;
    });
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] < array[i]) {
            segundoMaior.push(array[i]);
        }
    }
    resultado.push(segundoMaior[segundoMaior.length - 2], segundoMaior[1]);
    return resultado
}

// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {

    const NomeDofilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    return `Venha assistir ao filme ${NomeDofilme.nome}, de ${NomeDofilme.ano}, dirigido por ${NomeDofilme.diretor} e estrelado por ${NomeDofilme.atores[0]}, ${NomeDofilme.atores[1]}, ${NomeDofilme.atores[2]}, ${NomeDofilme.atores[3]}.`
}

// EXERCÍCIO 12

function retornaPessoaAnonimizada(pessoa) {

    pessoaAnonimizada = {
        nome: "Astrodev",
        idade: 25,
        endereco: "Rua do Futuro, 4",
        eamil: "astrodev@labenu.com.br",
    }
    const novoNome = {
        ...pessoa,
        nome: 'ANÔNIMO',
    }
    return novoNome
}


// EXERCÍCIO 13A

function retornaPessoasAutorizadas(pessoas) {

    const pessoasAutorizadas = [

        { "nome": "A", "idade": 12, "altura": 1.8 },
        { "nome": "B", "idade": 20, "altura": 1.3 },
        { "nome": "C", "idade": 15, "altura": 1.9 },
        { "nome": "D", "idade": 22, "altura": 1.8 },
        { "nome": "E", "idade": 10, "altura": 1.2 },
        { "nome": "F", "idade": 70, "altura": 1.9 }
    ]

    listaDePessoas = pessoasAutorizadas.filter((pessoa, index, array) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
    })
    return listaDePessoas
};




// EXERCÍCIO 13B

function retornaPessoasNaoAutorizadas(pessoas) {

    const pessoasNaoAutorizadas = [

        { "nome": "A", "idade": 12, "altura": 1.8 },
        { "nome": "B", "idade": 20, "altura": 1.3 },
        { "nome": "C", "idade": 15, "altura": 1.9 },
        { "nome": "D", "idade": 22, "altura": 1.8 },
        { "nome": "E", "idade": 10, "altura": 1.2 },
        { "nome": "F", "idade": 70, "altura": 1.9 }
    ]

    listaNaoAutorizadas = pessoasNaoAutorizadas.filter((pessoa, index, array) => {
        return pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60;

    })
    return listaNaoAutorizadas
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    const saldoTotal = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    const saldoAtualizado = saldoTotal.filter((saldo, compra) => {
        const saldoReal = saldo.saldoTotal - compra.compras;
        return saldoReal
    })
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const pacientes = [
        { nome: "João", dataDaConsulta: "01/10/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" },
        { nome: "Márcia", dataDaConsulta: "04/05/2021" }
    ]

    return pacientes.sort()

}
console.log(pacientes)

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}