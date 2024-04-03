import Products, { IProduct } from "../../db/models/Products";
import ProductsRepository from "../interfaz/ProductsRepository";

class ProductsRepositoryImpl implements ProductsRepository {
    productsSave(product: IProduct): Promise<any> {
        return new Promise((resolve, reject) => {
            product.save().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }


    productsAll(): Promise<any[] | undefined> {
        return new Promise((resolve, reject) => {
            Products.find().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }

}
export default new ProductsRepositoryImpl();