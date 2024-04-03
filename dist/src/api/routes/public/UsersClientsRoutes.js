"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersClientsController_1 = __importDefault(require("../../controllers/UsersClientsController"));
class UsersClientsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new UsersClientsController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new UsersClients
        this.router.post("/register", this.controller.create);
        // Retrieve all Cameras
        this.router.post("/login", this.controller.Login);
        // Retrieve a single Camera with id
        this.router.post("/list", this.controller.registerAll);
        // Update a Camera with id
        this.router.get("/users", this.controller.usersPagination);
        // logoutJwt a Camera with id
        this.router.post("/logout", this.controller.logoutJwt);
        /*
        
        // Delete a Camera with id
        this.router.post("/viewEnd", this.controller.camareP);

        // Delete a Camera with id
        this.router.get("/viewEnd", this.controller.camareP);

        // Delete a Camera with id
        this.router.get("/viewEnd/:id", this.controller.camareP); */
    }
}
exports.default = new UsersClientsRoutes().router;
//# sourceMappingURL=UsersClientsRoutes.js.map