"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import cameraRoute from "./cameraRoute";
const routersLink_1 = require("../utils/routersLink");
const ProductsRoutes_1 = __importDefault(require("./private/ProductsRoutes"));
const SpecialProductsRoutes_1 = __importDefault(require("./private/SpecialProductsRoutes"));
const UsersRoutes_1 = __importDefault(require("./private/UsersRoutes"));
class Routes {
    constructor(app) {
        this.url = routersLink_1.routersLink.api + routersLink_1.routersLink.v;
        app.use(this.url + routersLink_1.routersLink.products, ProductsRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.users, UsersRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.specialProducts, SpecialProductsRoutes_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map