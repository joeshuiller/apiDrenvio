import { Request, Response } from "express";
import SpecialProductsRepositoryImpl from "../repositories/SpecialProductsRepositoryImpl";
import SpecialProducts, { ISpecialProducts } from "../../db/models/SpecialProducts";
export default class SpecialProductsController{
  async save(req: Request, res: Response){
    try {
      const { idUsers, idProducts, prices } = req.body;
      const newproduct: ISpecialProducts = new SpecialProducts({ idUsers, idProducts, prices });
      const resp = await SpecialProductsRepositoryImpl.specialProductsSave(newproduct) 
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
  async specialProductsAll(req: Request, res: Response){
    try {
            const resp = await SpecialProductsRepositoryImpl.specialProductsAll() 
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

  async specialProductsUsers(req: Request, res: Response){
    try {
      console.log(req.params)
      const { idUsers, idProducts } = req.params;
      const resp = await SpecialProductsRepositoryImpl.specialProductsUsers(idUsers, idProducts) 
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