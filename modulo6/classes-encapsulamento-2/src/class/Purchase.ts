// --------------------------------Exercício 3 ------------------------------------ //
// Por fim, crie a classe Purchase no lugar de seu type. Não se preocupe com o refatoramento e uso do PurchaseDB. 
// Finalize a implementação com o uso de instâncias onde o type Purchase era utilizado.

export class Purchase {
    private id: string
    private userId: string
    private productId: string
    private quantity: number
    private totalPrice: number

    // Construtor
    constructor(id: string, userId: string, ProductId: string, quantity: number, totalPrice: number) {
        this.id = id;
        this.userId = userId;
        this.productId = ProductId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    };

    // Método de acesso
    public getId(): string {
        return this.id;
    };
    public getUserId(): string {
        return this.userId;
    };
    public getProductId(): string {
        return this.productId;
    };
    public getQuantity(): number {
        return this.quantity;
    };
    public getTotalPrice(): number {
        return this.totalPrice;
    };

    // Método de alteração ou definição de atributos
    public setId(newId: string): void {
        this.id = newId;
    };
    public setUserId(newUserId: string): void {
        this.userId = newUserId;
    };
    public setProductId(newProductId: string): void {
        this.productId = newProductId;
    };
    public setQuantity(newQuantity: number): void {
        this.quantity = newQuantity;
    };
    public setTotalPrice(newTotalPrice: number): void {
        this.totalPrice = newTotalPrice;
    };
}

