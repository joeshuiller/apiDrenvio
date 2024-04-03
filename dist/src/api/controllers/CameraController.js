"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camera_repository_1 = __importDefault(require("../repositories/camera.repository"));
class CameraController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const resp = yield camera_repository_1.default.save(req.body);
                //IOServer.IOSaveCameraPush(resp)
                res.status(201).json({
                    message: "create OK",
                    reqBody: resp,
                    code: res.status
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    message: "Internal Server Error!",
                    error: err
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield camera_repository_1.default.datAll();
                res.status(200).json({
                    message: "findAll OK",
                    reqBody: resp,
                    code: res.status
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!",
                    error: err
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({
                    message: "findOne OK",
                    reqParamId: req.params.id
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!",
                    error: err
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({
                    message: "update OK",
                    reqParamId: req.params.id,
                    reqBody: req.body
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!",
                    error: err
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({
                    message: "delete OK",
                    reqParamId: req.params.id
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    camareP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({
                    message: "camera Response",
                    reqParamId: req.body
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
}
exports.default = CameraController;
//# sourceMappingURL=CameraController.js.map