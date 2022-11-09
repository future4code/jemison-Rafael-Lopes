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

b) Comando SHOW DATABASES: retornou dua linhas (rows). Uma chamada 'information_schema' e outra chamada 'jbl-4415982-rafael-lopes'.
E para o comando SHOW TABLES: retornou a table Actor.

c) DESCRIBES retorna o tipo de dados configurado em cada campo
![](2022-11-08-21-27-39.png)

## Exercício 2

a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
![](2022-11-08-22-21-23.png)

b) Retornou um erro de entrada duplicada em razão de já existir um item com chave única na tabela

c) Retornou um error code 1136: Column count doesn’t match value count at row 1 -> significa que o número de informações que foi inserido na tabela não corresponde ao número de colunas da tabela. Neste caso foi inserido mais informações do que o número de colunas da tabela. Para corrigir o problema foi adicionado os parâmetros birth_date e gender para que os valores correspondam com o número de colunas, conforme pode ser visto na imagem abaixo.

![](2022-11-09-08-22-27.png)

d) Retornou um error code 1364: Field 'name' doesn't have a default value -> significa que a coluna name não recebeu um valor. Este erro ocorre porque o valor para name está NOT NULL, o que exige que um valor seja inserido nessa coluna para resolver o erro.  Para corrigir o problema foi adicionado o parâmetro name, fazendo com que dessa vez os dados do autor seja inserido na tabela.

![](2022-11-09-08-42-27.png)

e) Retornou um error Code: 1292: Incorrect date value: '1950' for column 'birth_date' at row 1. Isso porque o formato da data de nascimento inserido não corresponde ao formato padrão. Para resolver o problema foi adicionado aspas duplas em volta do nome da atriz Juliana Paes.

![](2022-11-09-08-49-34.png)

f) Adicionei os atores Rodrigo Santoro e Paola Oliveira.

![](2022-11-09-09-21-59.png)


