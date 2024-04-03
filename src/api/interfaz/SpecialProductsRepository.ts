import { ISpecialProducts } from "../../db/models/SpecialProducts";

export default interface SpecialProductsRepository {
    specialProductsSave(specialProducts: ISpecialProducts): Promise<any | undefined>;
    specialProductsAll(): Promise<any[]| undefined>;
    specialProductsFirst(specialProductsId: string): Promise<any | undefined>;
    specialProductsUsers(userId: string, productsId: string): Promise<any[]| undefined>;
}