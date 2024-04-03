"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientsProyectsController_1 = __importDefault(require("../../controllers/ClientsProyectsController"));
class ClientsProyectsRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new ClientsProyectsController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new ClientsProyects
        this.router.post("/", this.controller.create);
        // Retrieve all Cameras
        this.router.get("/:id", this.controller.getClientsProyects);
        /* // Retrieve a single Camera with id
         this.router.get("/:id", this.controller.findOne);
     
         // Update a Camera with id
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
exports.default = new ClientsProyectsRoute().router;
//# sourceMappingURL=ClientsProyectsRoute.js.map