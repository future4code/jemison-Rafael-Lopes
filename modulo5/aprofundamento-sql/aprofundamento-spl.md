# Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary => esse comando apaga da tabela Actor a coluna salário 

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6) => a coluna gender será nomeada para sex e poderá receber até 6 caracteres

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255) => a coluna não será nomeada porque já está como gender mas passará a receber até 255 caracteres

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100) => para que a coluna gender da tabela Actor aceite strings com a té 100 caracteres