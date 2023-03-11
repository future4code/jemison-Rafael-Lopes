export class Purchase {
    private id: string
    private userId: string
    private productId: string
    private quantity: number
    private totalPrice: number

    constructor(id: string, userId: string, ProductId: string, quantity: number, totalPrice: number) {
        this.id = id;
        this.userId = userId;
        this.productId = ProductId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    };

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

