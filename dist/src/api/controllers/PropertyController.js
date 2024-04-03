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
const PropertyRepositoryImpl_1 = __importDefault(require("../repositories/PropertyRepositoryImpl"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
const Property_1 = __importDefault(require("../../db/models/Property"));
class PropertyController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultCode = yield utilityMethods_1.default.codeList(Property_1.default, req.body.clientsProyectsId, 'PRT');
                if (resultCode) {
                    const dataSave = {
                        id: 0,
                        code: resultCode,
                        cadastre: req.body.cadastre,
                        address: req.body.address,
                        latitud: req.body.latitud,
                        longitud: req.body.longitud,
                        zoneId: req.body.zoneId,
                        status: true,
                        socialStratumId: req.body.socialStratumId,
                        usersCreate: req.body.usersCreate,
                        usersClientId: req.body.usersClientId,
                        clientsProyectsId: req.body.clientsProyectsId,
                    };
                    const resp = yield PropertyRepositoryImpl_1.default.save(dataSave);
                    res.status(201).json({
                        message: "create OK",
                        user: resp
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
                const resp = yield PropertyRepositoryImpl_1.default.registerAll(req.params.id);
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
    propertyPagination(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield PropertyRepositoryImpl_1.default.propertyPagination(req.query);
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
exports.default = PropertyController;
//# sourceMappingURL=PropertyController.js.map