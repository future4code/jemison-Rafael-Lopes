import { User } from "../src/model/user";
import performPurchase from "../src/purchase/performPurchase";

// 2.a) Faça um teste com um usuário com o saldo maior do que o valor de compra
test("Testing balance greater than the value", () => {
    const user: User = {
        name: "Rafael",
        balance: 10000
    }
    const result = performPurchase(user, 500)
    expect(result).toEqual({
        name: "Rafael",
        balance: 9500
    });
});