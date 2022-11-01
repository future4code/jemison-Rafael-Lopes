// Exercício 2
// Crie um arquivo chamado data.ts que exporta um array de produtos. 
// Cada produto será representado por um objeto com propriedades: id (string), name (string) e price (number). 
// Popule manualmente o array com pelo menos 3 produtos. 
import * as allTypes from './type'


export const products: allTypes.Product[] = [
    {
        id: 'product1',
        name: 'shoes',
        price: 50.00
    },
    {
        id: 'product2',
        name: 'boots',
        price: 75.00
    },
    {
        id: 'product3',
        name: 'T-shirt',
        price: 20.00
    },
    {
        id: 'product4',
        name: 'socks',
        price: 3.00
    },
    {
        id: 'product5',
        name: 'jacket',
        price: 45.00
    },
]