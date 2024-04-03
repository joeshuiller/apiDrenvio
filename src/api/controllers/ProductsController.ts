import { Request, Response } from "express";
import productsRepositoryImpl from "../repositories/ProductsRepositoryImpl";
import Products, { IProduct } from "../../db/models/Products";
export default class ProductsController{
  async save(req: Request, res: Response){
    try {
      const { name, category, price } = req.body;
      const newproduct: IProduct = new Products({ name, category, price });
        const resp = await productsRepositoryImpl.productsSave(newproduct) 
        if (resp) {
          res.status(200).json({
            message: "create OK",
            data: resp,
            code: res.status
          });
        } else {
          res.status(200).json({
            message: "create OK",
            data: [],
            code: res.status
          });
        }
        
    } catch (err) {
      console.log(err)
      res.status(500).json({
        message: "Internal Server Error!",
        error: err
      });
    }
  }
  async registerAll(req: Request, res: Response){
    try {
            const resp = await productsRepositoryImpl.productsAll() 
            if (resp) {
              res.status(200).json({
                message: "create OK",
                data: resp,
                code: res.status
              });
            } else {
              res.status(200).json({
                message: "create OK",
                data: [],
                code: res.status
              });
            }
            
    } catch (err) {
          console.log(err)
          res.status(500).json({
            message: "Internal Server Error!",
            error: err
          });
    }
  }

}