import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase {
    raw(arg0: string): [any] | PromiseLike<[any]> {
        throw new Error("Method not implemented.");
    }
    public static TABLE_PURCHASES = "Labe_Purchases"

    public async getAllPurchases() {
        const result = await BaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES)
            .select()
        return result
    };

    public async createPurchase(purchase: Purchase) {
        await BaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES)
            .insert({
                id: purchase.getId(),
                userId: purchase.getUserId(),
                productId: purchase.getProductId(),
                quantity: purchase.getQuantity(),
                totalPrice: purchase.getTotalPrice()
            });
    };

    public async getPurchaseById(id: string) {
        const result = await BaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES)
            .select()
            .where({ id: id })
        return result
    };
};