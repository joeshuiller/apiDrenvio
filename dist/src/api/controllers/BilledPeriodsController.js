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
const BilledPeriodsRepositoryImpl_1 = __importDefault(require("../repositories/BilledPeriodsRepositoryImpl"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
const BilledPeriods_1 = __importDefault(require("../../db/models/BilledPeriods"));
class BilledPeriodsController {
    agruopListBill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield BilledPeriodsRepositoryImpl_1.default.agruopListBill(req.body);
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
                //const respValid = await BilledPeriodsRepositoryImpl.(dataSave)
                const resultCode = yield utilityMethods_1.default.codeList(BilledPeriods_1.default, req.body.clientsProyectsId, 'BPD');
                const dataSave = {
                    id: 0,
                    code: resultCode,
                    initialDate: req.body.initialDate,
                    endDate: req.body.endDate,
                    billsDate: req.body.billsDate,
                    timelyPayment: req.body.timelyPayment,
                    cutDate: req.body.cutDate,
                    interest: req.body.interest,
                    status: true,
                    usersClientId: req.body.usersClientId,
                    clientsProyectsId: req.body.clientsProyectsId,
                    periodsId: req.body.periodsId,
                    appropriateDate: req.body.appropriateDate,
                };
                const resp = yield BilledPeriodsRepositoryImpl_1.default.save(dataSave);
                res.status(200).json({
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
    registerAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield BilledPeriodsRepositoryImpl_1.default.registerAll(req.params.id);
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
    billedPeriodsPagination(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataQuery = {
                    page: req.query.page,
                    size: req.query.size,
                    title: req.query.title,
                    clientsId: req.query.clientsId,
                    rolAppId: req.query.rolAppId
                };
                const resp = yield BilledPeriodsRepositoryImpl_1.default.billedPeriodsPagination(dataQuery);
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
}
exports.default = BilledPeriodsController;
//# sourceMappingURL=BilledPeriodsController.js.map