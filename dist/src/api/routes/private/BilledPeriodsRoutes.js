"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BilledPeriodsController_1 = __importDefault(require("../../controllers/BilledPeriodsController"));
const auth_1 = require("../auth");
class BilledPeriodsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new BilledPeriodsController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new UsersClients
        this.router.post("/", auth_1.auth, this.controller.create);
        // Retrieve all Cameras
        this.router.get("/:id", auth_1.auth, this.controller.registerAll);
        // Retrieve a single Camera with id 
        this.router.get("/", auth_1.auth, this.controller.billedPeriodsPagination);
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
exports.default = new BilledPeriodsRoutes().router;
//# sourceMappingURL=BilledPeriodsRoutes.js.map