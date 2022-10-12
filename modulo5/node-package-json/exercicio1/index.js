// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Resposta: Utilizando o process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

const myName = "Rafael";
const myAge = 30;
const statement = `Olá, ${myName}! Você tem ${myAge} anos.`;

function message() {
    const result = statement;
    return result
}
const result = message()
console.log(result);

