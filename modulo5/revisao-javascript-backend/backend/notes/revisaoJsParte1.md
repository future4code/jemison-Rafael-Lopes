# Parte 1 - Revisão JS para o Back-end  

## É recomendado que você consiga entender frases técnicas, tais como

> “Declare uma variável e atribua a ela um objeto que representa um cliente de um banco. Inicialize o objeto com pelo menos três propriedades e um método.”
>
> “Crie uma função que soma dois números e utiliza um callback de validação para tratar erros de entrada.”

## Declaração, atribuição e inicialização

**Declaração** é apenas criar uma variável. Não necessariamente necessita atribuir-lhe um valor.
**Inicialização** significa atribuir um valor a uma variável.</br>
Obs: A **Atribuição** é definida pelo sinal de igualdade(=).

## Diferença entre propriedade e método (referenciando a um objeto)

**Propriedade** Javascript é uma característica de um objeto, frequentemente descrita como atributos associados à uma estrutura de dados.

Há dois tipos de propriedades:

+ Propriedades de instâncias que contém informação específica para dada instância de objeto, e
+ Propriedades estáticas que contém informação compartilhada com todas as instâncias de objetos.

**Método** se dá quando uma propriedade de determinado objeto que armazena uma função.

## Desestruturação de objetos e arrays

Desestruturação é uma expressão do JavaScript que torna possível "desembalar" valores dos arrays ou propriedades de objetos em variáveis distintas. Ou seja, podemos extrair dados dos arrays e dos objetos e atribuí-los às variáveis.

### Em Arrays

+ Antes do ES6

`let apresentacao = ["Olá", "eu" , "sou", "a", "Sarah"];`
`let saudacao = apresentacao[0];`
`let nome = apresentacao[4];`

`console.log(saudacao);//"Olá"`
`console.log(nome);//"Sarah"`

+ Após o ES6

`let [saudacao, pronome] = ["Olá", "eu", "sou", "a", "Sarah"];`

`console.log(saudacao);//"Olá"`
`console.log(pronome);//"eu"`

E se quisermos obter o primeiro e o último item do nosso array, em vez do primeiro e do segundo item, e atribuir somente duas variáveis? Isso pode ser feito.

`let [saudacao,,,,nome] = ["Olá", "eu" , "sou", "a", "Sarah"];`

`console.log(saudacao);//"Olá"`
`console.log(saudacao);//"Sarah"`

### Em Objetos

Digamos que queremos extrair dados de um objeto e atribuí-lo a novas variáveis.

+ Antes do ES6

`let pessoa = {nome: "Sarah", pais: "Nigéria", profissao: "Desenvolvedora"};`

`let nome = pessoa.nome;`
`let pais = pessoa.pais;`
`let profissao = pessoa.profissao;`

`console.log(nome);//"Sarah"`
`console.log(pais);//"Nigéria`
`console.log(profissao);//Desenvolvedora"`

+ Após o ES6

`let pessoa = {nome: "Sarah", pais: "Nigéria", profissao: "Desenvolvedora"};`

`let {nome, pais, profissao} = pessoa;`

`console.log(nome);//"Sarah"`
`console.log(pais);//"Nigéria`
`console.log(profissao);//Desenvolvedora"`

## Diferença entre parâmetros e argumentos

+ **Parâmetros** - sempre na declaração da função e são eles que representam as variáveis.

+ **Argumentos** - são os valores passados na chamada da função. E são esses valores que são armazenados nos parâmetros.

Exemplo

`const somaDoisNumeros = (primeiro, segundo)=>{`

`return primeiro + segundo`

`}`

`console.log(somaDoisNumeros(1,2))`

### Entrada e saída (input e output)

**Inputs** - recebe nos parâmetros.

**Outputs** - envia no retorno (return).

### O que é um callback

Uma função sendo passada como argumento para outra função. Para que essa outra função execute a função recebida.

<code>
const imprimeTexto = (texto)=>{
    console.log(texto)
}

const matriculaPessoa=(pessoa, callback)=>{
    if(pessoa.idade>=18){
        callback("Matrícula realizada")
    }else{
        callback("Idade insuficiente. Precisa ser maior de 18 anos.)
    }
}

const ana={
    idade: 15
}

const joao{
    idade:21
}

matriculaPessoa(ana, imprimeTexto)
matriculaPessoa(joao, imprimeTexto)
</code>

É muito comum nos métodos filter() e map().

O callback permite uma função chamar outra função.

### Notação de colchetes em objetos

Utilizado para acessar uma propriedade de forma dinâmica.

