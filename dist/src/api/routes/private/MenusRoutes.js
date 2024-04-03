"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MenusController_1 = __importDefault(require("../../controllers/MenusController"));
const auth_1 = require("../auth");
class MenusRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new MenusController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new UsersClients
        this.router.post("/", auth_1.auth, this.controller.create);
        // Retrieve all Cameras
        this.router.get("/:id", auth_1.auth, this.controller.getMenus);
        // Retrieve a single Camera with id 
        this.router.get("/idRol/:id", this.controller.getMenuByIdRol);
        /* // Update a Camera with idRecordExpensesController
        this.router.put("/:id", this.controller.update);
    
        // Delete a Camera with id
        this.router.delete("/:id", this.controller.delete);
        
        // Delete a Camera with id
        this.router.post("/viewEnd", this.controller.camareP);

        // Delete a Camera with id
        this.router.get("/viewEnd", this.controller.camareP);

        // Delete a Camera with id
        this.router.get("/viewEnd/:id", this.controller.camareP); */
    }
}
exports.default = new MenusRoutes().router;
//# sourceMappingURL=MenusRoutes.js.map