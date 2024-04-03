import { Router } from "express";
import ProductsController from "../../controllers/ProductsController";


class ProductsRoutes{
    router = Router();
    controller = new ProductsController;

    constructor(){
        this.intializeRoutes()
    }

    intializeRoutes() {
         // Retrieve all Products
        this.router.get("/", this.controller.registerAll);
        this.router.post("/", this.controller.save);
      }
}

export default new ProductsRoutes().router;