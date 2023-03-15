import knex from "knex";
// ------------------------------- Exercício 1 -------------------------------- //
// Crie o arquivo BaseDatabase.ts dentro da pasta database e desenvolva a classe BaseDatabase . 
// Ela deve ser uma classe abstrata com um atributo chamado connection encapsulado como protected e configurado como estático.

export abstract class BaseDatabase {
    // abstract - indica que a classe BaseDatabase é do tipo abstrata e não pode ser instanciada, ela será herdada.
    // protected - indica que o atributo connection só pode ser acessado pela classe e seus descendentes (herança).
    protected static connection = knex({
        // static - indica que o atributo connection é compartilhado entre as instâncias.
        // A connection só pode ser acessada via classe (sem instanciar).
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        },
    });
};