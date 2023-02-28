import { User } from "../src/model/user";
import performPurchase from "../src/purchase/performPurchase";

// 2.b) Faça um teste com um usuário com o saldo igual ao valor de compra
test("Testing balance equal to value", () => {
    const user: User = {
        name: "Bob Marley",
        balance: 500
    }
    const result = performPurchase(user, 500)
    expect(result).toEqual({
      ...user,
        balance: 0
    })
});