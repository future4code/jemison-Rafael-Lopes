# Resposta das perguntas de interpletação de código

## Exercício 1

### a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

R: Concordo porque aumenta as possibilidades de combinações entre números, letras e carácteres especiais.
Porém, a escolha entre usar números ou strings como identificadores vai depender de vários fatores, incluindo a escala e o tipo de aplicativo, as restrições de desempenho e os requisitos de segurança. Por isso, o uso do UUID v4 pode ser uma boa opção, pois oferece uma forma confiável de garantir a unicidade dos ids.

## Exercício 2

### a) O que a linha as string faz? Por que precisamos usar ela ali?

R: A linha *as string* indica que o valor está sendo convertido para string. Isso é necessário porque o JWT espera que os dados a serem armazenados no token sejam strings, então é necessário converter o id do usuário antes de armazená-lo no token.
