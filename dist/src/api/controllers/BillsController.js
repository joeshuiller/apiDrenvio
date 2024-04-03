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
const BillsRepositoryImpl_1 = __importDefault(require("../repositories/BillsRepositoryImpl"));
const PropertyRepositoryImpl_1 = __importDefault(require("../repositories/PropertyRepositoryImpl"));
const BilledPeriodsRepositoryImpl_1 = __importDefault(require("../repositories/BilledPeriodsRepositoryImpl"));
const Bills_1 = __importDefault(require("../../db/models/Bills"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
class BillsController {
    agruopListBill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield BillsRepositoryImpl_1.default.agruopListBill(req.body);
                res.status(201).json({
                    message: "create OK",
                    user: resp
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
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield PropertyRepositoryImpl_1.default.registerBilledPeriods(req.body.clientsProyectsId);
                const billedPeriods = yield BilledPeriodsRepositoryImpl_1.default.retrieveById(req.body.billedPeriodsId);
                const resultCode = yield utilityMethods_1.default.codeList(Bills_1.default, req.body.clientsProyectsId, 'FCT');
                if (billedPeriods) {
                    if (resp) {
                        let result = [];
                        resp.forEach(element => {
                            const dataSave = {
                                id: 0,
                                code: resultCode,
                                propertyId: element.id,
                                usersCreate: req.body.usersCreate,
                                status: true,
                                usersClientId: element.usersClientId,
                                clientsProyectsId: req.body.clientsProyectsId,
                                periodsId: billedPeriods.periodsId,
                                billedPeriodsId: billedPeriods.id
                            };
                            result.push(dataSave);
                        });
                        const dataList = yield BillsRepositoryImpl_1.default.save(result);
                        res.status(200).json({
                            message: "create OK",
                            data: dataList,
                            code: res.status
                        });
                    }
                    else {
                        res.status(401).json({
                            message: "Internal Server Error!",
                            error: "No hay propiedad registrada"
                        });
                    }
                }
                else {
                    res.status(401).json({
                        message: "Internal Server Error!",
                        error: "Periodo facturado no existe"
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
                const resp = yield BillsRepositoryImpl_1.default.registerAll(req.params.id);
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
    billsPagination(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataQuery = {
                    page: req.query.page,
                    size: req.query.size,
                    title: req.query.title,
                    clientsId: req.query.clientsId,
                    rolAppId: req.query.rolAppId,
                    billedPeriodsId: req.query.billedPeriodsId
                };
                const resp = yield BillsRepositoryImpl_1.default.billsPagination(dataQuery);
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
                        data: resp,
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
    editBills(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield BillsRepositoryImpl_1.default.agruopListBill(req.body);
                res.status(201).json({
                    message: "create OK",
                    user: resp
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
    accumulatedDebtsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield BillsRepositoryImpl_1.default.accumulatedDebtsById(req.body.id);
                res.status(200).json({
                    message: "list OK",
                    user: resp
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
    queryBills(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield BillsRepositoryImpl_1.default.queryBills(req.body);
                if (resp) {
                    let respList = utilityMethods_1.default.processData(resp);
                    res.status(200).json({
                        message: "list OK",
                        user: respList
                    });
                }
                else {
                    res.status(200).json({
                        message: "list OK",
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
}
exports.default = BillsController;
//# sourceMappingURL=BillsController.js.map