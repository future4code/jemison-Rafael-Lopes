// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). 
// A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

function person(name: string, birth: string):void {

    const message = `Olá, me chamo ${name}, nasci no dia ${birth.split("25")} do mês de ${birth.split("03")} do ano de ${birth.split("1983")}`;
    name = "Rafael",
    birth = "25/03/19830",
    // return message;    
    console.log(message);
}


