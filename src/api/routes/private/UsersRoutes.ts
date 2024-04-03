import { Router } from "express";
import UsersController from "../../controllers/UsersController";


class UsersRoutes{
    router = Router();
    controller = new UsersController;

    constructor(){
        this.intializeRoutes()
    }

    intializeRoutes() {
         // Retrieve all Users
        this.router.get("/", this.controller.registerAll);
        this.router.post("/", this.controller.save);
      }
}

export default new UsersRoutes().router;