import { User } from "../src/model/user";
import performPurchase from "../src/purchase/performPurchase";

// 2.c) Faça um teste com um usuário com o saldo menor do que o valor de compra
test("Testing balance less than the value", () => {
    const user: User = {
        name: "Astrodev",
        balance: 30
    }
    const result = performPurchase(user, 50)
    expect(result).not.toBeDefined()
})