import SpecialProducts, { ISpecialProducts } from "../../db/models/SpecialProducts";
import SpecialProductsRepository from "../interfaz/SpecialProductsRepository";

class SpecialProductsRepositoryImpl implements SpecialProductsRepository {
    specialProductsSave(specialProducts: ISpecialProducts): Promise<any> {
        return new Promise((resolve, reject) => {
            specialProducts.save().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }
    specialProductsAll(): Promise<any[] | undefined> {
        return new Promise((resolve, reject) => {
            SpecialProducts.find().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }
    specialProductsFirst(specialProductsId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            SpecialProducts.findOne({ _id: specialProductsId }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }
    specialProductsUsers(userId: string, productsId: string): Promise<any[] | undefined> {
        return new Promise((resolve, reject) => {
            SpecialProducts.find({ idUsers: userId , idProducts: productsId}).populate({
                path:'idUsers',
                model:'Users'
            }).populate({
                path:'idProducts',
                model:'Product'
            }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }

}
export default new SpecialProductsRepositoryImpl();