"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SelectClickController_1 = __importDefault(require("../../controllers/SelectClickController"));
class SelectClickRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new SelectClickController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new UsersClients
        this.router.post("/", this.controller.create);
    }
}
exports.default = new SelectClickRoute().router;
//# sourceMappingURL=SelectClickRoute.js.map