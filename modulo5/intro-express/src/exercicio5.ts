// Acesse a API do JSONPlaceholder e observe os endpoints que buscam **posts**. 
// No seu projeto, crie uma variável de tipo para representar esse recurso. 
// Eles devem possuir as seguintes propriedades:- id - title - body - userId.


export type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}