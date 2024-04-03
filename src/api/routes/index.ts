import { Application } from "express";
//import cameraRoute from "./cameraRoute";
import { routersLink } from "../utils/routersLink";
import ProductsRoutes from "./private/ProductsRoutes";
import SpecialProductsRoutes from "./private/SpecialProductsRoutes";
import UsersRoutes from "./private/UsersRoutes";

export default class Routes {
    url = routersLink.api+routersLink.v
    constructor(app: Application) {
        app.use(this.url+routersLink.products, ProductsRoutes);
        app.use(this.url+routersLink.users, UsersRoutes);
        app.use(this.url+routersLink.specialProducts, SpecialProductsRoutes);
    }
  }