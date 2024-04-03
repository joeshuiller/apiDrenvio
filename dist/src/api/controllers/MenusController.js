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
const MenusRepositoryImpl_1 = __importDefault(require("../repositories/MenusRepositoryImpl"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
class MenusController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                let data = {
                    id: 0,
                    path: req.body.path,
                    title: req.body.title,
                    type: req.body.type,
                    iconType: req.body.iconType,
                    collapse: req.body.collapse,
                    children: req.body.children,
                    imgMenu: utilityMethods_1.default.imgProcessBase64(req.body.imgMenu, '.png'),
                    status: req.body.state,
                    rolAppId: req.body.rolAppId,
                    clientsProyectsId: req.body.clientsProyectsId,
                };
                const resp = yield MenusRepositoryImpl_1.default.save(data);
                res.status(201).json({
                    message: "create OK",
                    data: resp,
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
    getMenus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const resp = yield MenusRepositoryImpl_1.default.retrieveByIdUsers(req.params.id);
                if (resp) {
                    res.status(200).json({
                        message: "create OK",
                        data: resp,
                        code: res.status
                    });
                }
                else {
                    res.status(200).json({
                        message: "create OK",
                        data: [],
                        code: res.status
                    });
                }
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
    getMenusAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const resp = yield MenusRepositoryImpl_1.default.retrieveByIdAll();
                if (resp) {
                    res.status(200).json({
                        message: "create OK",
                        data: resp,
                        code: res.status
                    });
                }
                else {
                    res.status(200).json({
                        message: "create OK",
                        data: [],
                        code: res.status
                    });
                }
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
    getMenuByIdRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield MenusRepositoryImpl_1.default.retrieveByIdRol(parseInt(req.params.id));
                if (resp) {
                    res.status(200).json({
                        message: "create OK",
                        data: resp,
                        code: res.status
                    });
                }
                else {
                    res.status(200).json({
                        message: "create OK",
                        data: [],
                        code: res.status
                    });
                }
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
}
exports.default = MenusController;
//# sourceMappingURL=MenusController.js.map