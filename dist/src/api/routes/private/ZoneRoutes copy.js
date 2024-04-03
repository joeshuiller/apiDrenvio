"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ZoneController_1 = __importDefault(require("../../controllers/ZoneController"));
const auth_1 = require("../auth");
class ZoneRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new ZoneController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new UsersClients
        this.router.post("/", auth_1.auth, this.controller.create);
        // Retrieve all Cameras
        this.router.get("/:id", auth_1.auth, this.controller.registerAll);
        // Retrieve a single Camera with id 
        this.router.get("/", this.controller.zonePagination);
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
exports.default = new ZoneRoutes().router;
//# sourceMappingURL=ZoneRoutes%20copy.js.map