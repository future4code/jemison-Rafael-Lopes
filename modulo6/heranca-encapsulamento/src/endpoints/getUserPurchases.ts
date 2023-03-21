import { Request, Response } from "express"
// import connection from "../database/connection"
import { ProductDatabase } from "../database/ProductDatabase";
import { PurchaseDatabase } from "../database/PurchaseDatabase";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { UserDatabase } from "../database/UserDatabase";

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        // const [result] = await connection.raw(`
        // SELECT
        //     ${TABLE_USERS}.email,
        //     ${TABLE_PRODUCTS}.name AS product_name,
        //     ${TABLE_PRODUCTS}.price AS product_price,
        //     ${TABLE_PURCHASES}.quantity AS product_quantity,
        //     ${TABLE_PURCHASES}.total_price
        // FROM ${TABLE_PURCHASES}
        // JOIN ${TABLE_USERS}
        // ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        // JOIN ${TABLE_PRODUCTS}
        // ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        // WHERE ${TABLE_PURCHASES}.user_id = ${id};
        // `);

        const purchaseDatabase = new PurchaseDatabase()
        const result = await purchaseDatabase.getUserPurchases(id)

        const userDatabase = new UserDatabase()
        const email = await userDatabase.getUserEmailById(id)

        const purchases = result.map((purchase: any) => {
            return {
                email: email,
                productName: purchase.product_name,
                productPrice: purchase.product_price,
                productQuantity: purchase.product_quantity,
                totalPrice: purchase.total_price
            };
        });

        res.status(200).send({ purchases: purchases })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    };
};