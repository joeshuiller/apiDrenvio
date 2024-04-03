"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeController_1 = require("../../controllers/HomeController");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/", HomeController_1.welcome);
        this.router.get("/camerap", HomeController_1.cameraP);
        this.router.post("/camerap", HomeController_1.cameraP);
    }
}
exports.default = new HomeRoutes().router;
//# sourceMappingURL=homeRoute.js.map