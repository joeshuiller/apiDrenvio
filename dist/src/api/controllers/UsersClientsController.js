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
const UsersRepositoryImpl_1 = __importDefault(require("../repositories/UsersRepositoryImpl"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
const CustomerDetailsRepositoryImpl_1 = __importDefault(require("../repositories/CustomerDetailsRepositoryImpl"));
const ClientsProyectsRepositoryImpl_1 = __importDefault(require("../repositories/ClientsProyectsRepositoryImpl"));
const MenusRepositoryImpl_1 = __importDefault(require("../repositories/MenusRepositoryImpl"));
class UsersClientsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                let valid = req.body;
                if (valid.img) {
                    valid.img = valid.img.dataURL;
                }
                let password = utilityMethods_1.default.createUsersFindPassword(valid);
                const resp = yield UsersRepositoryImpl_1.default.save(password);
                const detail = yield CustomerDetailsRepositoryImpl_1.default.retrieveByIdUsersDetails(resp.id.toString());
                const proyect = yield ClientsProyectsRepositoryImpl_1.default.retrieveById(resp.clientsProyectsId.toString());
                const menu = yield MenusRepositoryImpl_1.default.retrieveByIdRol(resp.rolAppId);
                let token = utilityMethods_1.default.createJwt(resp);
                res.status(201).json({
                    message: "create OK",
                    detail: detail,
                    proyect: proyect,
                    user: resp,
                    menu: menu,
                    authorisation: {
                        token: token,
                        type: "bearer",
                        expires_in: 3600
                    }
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
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const validEmail = yield UsersRepositoryImpl_1.default.validEmail(req.body.email);
                if (validEmail) {
                    const detail = yield CustomerDetailsRepositoryImpl_1.default.retrieveByIdUsersDetails(validEmail.id.toString());
                    const proyect = yield ClientsProyectsRepositoryImpl_1.default.retrieveById(validEmail.clientsProyectsId.toString());
                    const menu = yield MenusRepositoryImpl_1.default.retrieveByIdRol(validEmail.rolAppId);
                    const isMatch = bcrypt_1.default.compareSync(req.body.passwordClient, validEmail.passwordClient);
                    let token = utilityMethods_1.default.createJwt(validEmail);
                    if (isMatch) {
                        res.status(200).json({
                            message: "findAll OK",
                            detail: detail,
                            proyect: proyect,
                            user: validEmail,
                            menu: menu,
                            authorisation: {
                                token: token,
                                type: "bearer",
                                expires_in: 3600
                            }
                        });
                    }
                    else {
                        res.status(401).json({
                            message: "Usuario y/o contraseña invalido!",
                            error: "Usuario y/o contraseña invalido!"
                        });
                    }
                }
                else {
                    res.status(401).json({
                        message: "Usuario y/o contraseña invalido!",
                        error: "Usuario y/o contraseña invalido!"
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
    registerAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const resp = yield UsersRepositoryImpl_1.default.registerAll(req.body.id, req.body.rolAppId);
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
    usersPagination(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield UsersRepositoryImpl_1.default.usersPagination(req.query);
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
    logoutJwt(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield UsersRepositoryImpl_1.default.logout(req);
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
                res.status(500).json({
                    message: "Internal Server Error!",
                    error: err
                });
            }
        });
    }
}
exports.default = UsersClientsController;
//# sourceMappingURL=UsersClientsController.js.map