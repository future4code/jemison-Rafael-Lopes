// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Resposta: Utilizando o process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

// const myName = "Rafael";
// const myAge = 39;
// const statement = `Olá, ${myName}! Você tem ${myAge} anos.`;

function message() {
    const name = process.argv[2];
    const age = process.argv[3];

    console.log(`Olá, ${name}! Você tem ${age} anos!`);
}
message()

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

function statement() {
    const name1 = process.argv[2];
    const age1 = Number(process.argv[3])

    console.log(`Olá, ${name1}! Você tem ${age1} anos. Em sete anos você terá ${age1 + 7} anos de idade.`);
}
statement()
