import { IProduct } from "../../db/models/Products";

export default interface ProductsRepository {
    productsSave(product: IProduct): Promise<any | undefined>;
    productsAll(clientsProyectsId: string): Promise<any[]| undefined>;
}