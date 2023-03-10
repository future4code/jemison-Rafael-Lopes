// --------------------------------Exercício 2 ------------------------------------ //
// Modifique o type Product para que ele também seja uma classe.

export class Product {
    private id: string
    private name: string
    private price: number

    // Construtor
    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    };

    // Método de acesso
    public getId(): string {
        return this.id
    };
    public getName(): string {
        return this.name;
    };
    public getPrice(): number {
        return this.price;
    };

    // Método de alteração ou definição de atributos
    public setId(newId: string): void {
        this.id = newId;
    };
    public setName(newName: string): void {
        this.name = newName;
    };
    public setPrice(newPrice: number) {
        this.price = newPrice;
    };
};
