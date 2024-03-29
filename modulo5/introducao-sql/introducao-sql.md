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

## Exercício 3

a) Escreva uma query que retorne todas as informações das atrizes.

R: SELECT * from Actor WHERE gender = "female"

![](2022-11-09-09-27-07.png)

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos

R: SELECT name, salary from Actor WHERE name = "Tony Ramos"

![](2022-11-09-09-41-51.png)

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

R: SELECT gender from Actor WHERE gender = "invalid". Retornou a coluna gender com row = 0.

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

R: SELECT id, name, salary from Actor WHERE salary < 500001

![](2022-11-09-09-54-48.png)

e) Gerou um error Code: 1054. Unknown column 'nome' in 'field list'. A coluna 'nome' não foi encontrada. Corrigi nome para name que é a opção existente na tabela.

![](2022-11-09-09-59-41.png)

## Exercício 4

a) SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

R: A query acima solicita que retorne todos atores que possuem o nome que comece com a letra A ou J e com o salário maior que 300 mil.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

R: SELECT name, salary from Actor WHERE name NOT LIKE "A%" AND salary > 350000

![](2022-11-09-10-53-04.png)

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

R: SELECT name from Actor WHERE name LIKE "G%" OR name LIKE "g%"

![](2022-11-09-10-49-03.png)

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

R: SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

# Exercício 5

a) Explique a query resumidadmente

CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
data_de_lancamento DATE NOT NULL,
avaliacao INT NOT NULL
);

- CREATE TABLE Filmes => Cria uma entidade (tabela) com o nome Filmes
- id VARCHAR(255) PRIMARY KEY => torna possível criar uma chave primária como id com no máximo 255 caracteres
- nome VARCHAR(255) NOT NULL => indica que a coluna não pode ser nula. Precisa ter algum valor e nome do título não pode ultrapassar os 255 caracteres de espaço reservado
- sinopse TEXT(10000) NOT NULL, => este parametro será obrigatório e do tipo texto sem limitação de caracteres
- data_de_lancamento DATE NOT NULL, => a data de lançamento deverá ser criada respeitando o formato YYYY-MM-DD e esse dado será obrigatório
- avaliacao INT NOT NULL => o parametro avaliação é obrigatória e receberá um número inteiro

b) INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c) INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d) INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
10
);

e) INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
"004",
"O Auto da Compadecida",
"As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens.",
"2000-09-10",
10
);

## Exercício 6

### Escreva uma query que

a) Retorne o id, título e avaliação a partir de um id específico

R: SELECT id, nome, avaliacao FROM Filmes WHERE id = 002

![](2022-11-09-15-33-34.png)

b) Retorne um filme a partir de um nome específico

R: SELECT * FROM Filmes WHERE nome = "O Auto da Compadecida"

![](2022-11-09-15-36-50.png)

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

R: SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7

![](2022-11-09-15-38-40.png)

## Exercício 7

### Escreva uma query que

a) Retorna um filme cujo título contenha a palavra `vida`

R: SELECT * FROM Filmes WHERE nome LIKE "%vida%" . Não retornou nada.

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

R: SELECT * FROM Filmes WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%". Encontrou o termo na coluna sinopse:

![](2022-11-09-15-56-10.png)

c) Procure por todos os filmes que já tenham lançado

R: SELECT * FROM Filmes WHERE data_de_lancamento < "2012-05-04";

![](2022-11-09-15-59-34.png)

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

R: SELECT * FROM Filmes WHERE data_de_lancamento < "2012-05-04" AND (nome LIKE "%aventuras%" OR sinopse LIKE "%aventuras%") AND avaliacao > 7.

![](2022-11-09-16-05-36.png)
