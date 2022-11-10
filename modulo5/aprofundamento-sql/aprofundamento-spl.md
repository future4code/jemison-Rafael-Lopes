# Exercícios de aprofundamento SQL

## Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary => esse comando apaga da tabela Actor a coluna salário 

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6) => a coluna gender será nomeada para sex e poderá receber até 6 caracteres

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255) => a coluna não será nomeada porque já está como gender mas passará a receber até 255 caracteres

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100) => para que a coluna gender da tabela Actor aceite strings com a té 100 caracteres

## Exercício 2

a) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003" => atualiza o nome e data de nascimento do ator com id 003

b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes" => altera o nome Juliana Paes para JULIANA PAES / UPDATE Actor SET name =  "Juliana Paes" WHERE id =005 => retorna para o formato de nome anterior

c) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005" => atualiza todas as informações do ator com o id 005

d) UPDATE Actor SET name = "Moacyr Franco" WHERE name = "Paula Soares" 

Resultado: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 => não encontrou correspondência com o name = "Paula Soares". Logo, nada mudou na tabela