"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RolAppController_1 = __importDefault(require("../../controllers/RolAppController"));
class RolAppRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new RolAppController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new UsersClients
        this.router.post("/", this.controller.create);
        // Retrieve all Cameras
        this.router.get("/:id", this.controller.getRolApp);
        // Retrieve all Cameras
        this.router.get("/", this.controller.getRolAppAll);
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
exports.default = new RolAppRoute().router;
//# sourceMappingURL=RolAppRoute.js.map