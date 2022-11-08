## Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) Os demais comandos que estão na query são:

- CREATE TABLE Actor => utilizado para criar uma tabela com o nome Actor
- id/ name VARCHAR(255) => torna possível criar uma string com no máximo 255 caracteres para o id e o name
- PRIMARY KEY => Chave primária (chave única na tabela)
- birth_date DATE => significa que a birth_date deverá ser criada respeitando o formato YYYY-MM-DD
- gender VARCHAR(6) => o parâmetro gender será criado no formato string de no máximo 6 caracteres
- NOT NULL => indica que a coluna não pode ser nula. Precisa ter algum valor

b) Comando SHOW DATABASES: 
