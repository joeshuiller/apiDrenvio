"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CameraController_1 = __importDefault(require("../../controllers/CameraController"));
class CameraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new CameraController_1.default;
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new Camera
        this.router.post("/", this.controller.create);
        // Retrieve all Cameras
        this.router.get("/", this.controller.findAll);
        // Retrieve a single Camera with id
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
        this.router.get("/viewEnd/:id", this.controller.camareP);
    }
}
exports.default = new CameraRoutes().router;
//# sourceMappingURL=cameraRoute.js.map