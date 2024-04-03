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
const InvoicePaymentRepositoryImpl_1 = __importDefault(require("../repositories/InvoicePaymentRepositoryImpl"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
const InvoicePayment_1 = __importDefault(require("../../db/models/InvoicePayment"));
const BillsRepositoryImpl_1 = __importDefault(require("../repositories/BillsRepositoryImpl"));
class InvoicePaymentController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const resultCode = yield utilityMethods_1.default.codeList(InvoicePayment_1.default, req.body.clientsProyectsId, 'IPM');
                const dataSave = {
                    id: 0,
                    code: resultCode,
                    discount: req.body.discount,
                    fertilizers: req.body.fertilizers,
                    invoicePayment: req.body.invoicePayment,
                    status: true,
                    propertyId: req.body.propertyId,
                    billsId: req.body.billsId,
                    usersCreate: req.body.usersCreate,
                    usersClientId: req.body.usersClientId,
                    clientsProyectsId: req.body.clientsProyectsId,
                };
                this.updateBills(req.body);
                const resp = yield InvoicePaymentRepositoryImpl_1.default.save(dataSave);
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
    updateBills(item) {
        return __awaiter(this, void 0, void 0, function* () {
            if (parseInt(item.invoicePayment) >= 12000) {
                const billsItem = yield BillsRepositoryImpl_1.default.retrieveById(item.billsId);
                if (billsItem) {
                    const dataSave = {
                        id: billsItem.id,
                        code: billsItem.code,
                        propertyId: billsItem.propertyId,
                        usersCreate: billsItem.usersCreate,
                        status: false,
                        usersClientId: billsItem.usersClientId,
                        clientsProyectsId: billsItem.clientsProyectsId,
                        periodsId: billsItem.periodsId,
                        billedPeriodsId: billsItem.id
                    };
                    yield BillsRepositoryImpl_1.default.update(dataSave);
                }
            }
        });
    }
    registerAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const resp = yield InvoicePaymentRepositoryImpl_1.default.registerAll(req.params.id);
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
exports.default = InvoicePaymentController;
//# sourceMappingURL=InvoicePaymentController.js.map