"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BillsController_1 = __importDefault(require("../../controllers/BillsController"));
const auth_1 = require("../auth");
class BillsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new BillsController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new UsersClients
        this.router.post("/", auth_1.auth, this.controller.create);
        // Retrieve all Cameras
        this.router.get("/:id", auth_1.auth, this.controller.registerAll);
        // Retrieve a single Camera with id 
        this.router.post("/group", auth_1.auth, this.controller.agruopListBill);
        // Retrieve a single Camera with id 
        this.router.get("/", auth_1.auth, this.controller.billsPagination);
        // Update a Camera with idRecordExpensesController
        this.router.post("/debts", auth_1.auth, this.controller.accumulatedDebtsById);
        // Update a Camera with queryBills
        this.router.post("/queryBills", auth_1.auth, this.controller.queryBills);
        /** // Delete a Camera with id
        this.router.delete("/:id", this.controller.delete);
        
        // Delete a Camera with id
        this.router.post("/viewEnd", this.controller.camareP);

        // Delete a Camera with id
        this.router.get("/viewEnd", this.controller.camareP);

        // Delete a Camera with id
        this.router.get("/viewEnd/:id", this.controller.camareP); */
    }
}
exports.default = new BillsRoutes().router;
//# sourceMappingURL=BillsRoutes.js.map