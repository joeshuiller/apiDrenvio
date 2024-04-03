import { Router } from "express";
import SpecialProductsController from "../../controllers/SpecialProductsController";


class SpecialProductsRoutes{
    router = Router();
    controller = new SpecialProductsController;

    constructor(){
        this.intializeRoutes()
    }

    intializeRoutes() {
         // Retrieve all Products
        this.router.get("/", this.controller.specialProductsAll);
        this.router.post("/", this.controller.save);
        this.router.get("/:idUsers/:idProducts", this.controller.specialProductsUsers);
      }
}

export default new SpecialProductsRoutes().router;