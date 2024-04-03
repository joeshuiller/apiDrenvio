import { Request, Response } from "express";
import UsersRepositoryImpl from "../repositories/UsersRepositoryImpl";
import Users, { IUsers } from "../../db/models/Users";
export default class UsersController{
  async save(req: Request, res: Response){
    try {
      const { name, surName, cards } = req.body;
      const newproduct: IUsers = new Users({ name, surName, cards });
        const resp = await UsersRepositoryImpl.usersSave(newproduct) 
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
            const resp = await UsersRepositoryImpl.usersAll() 
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