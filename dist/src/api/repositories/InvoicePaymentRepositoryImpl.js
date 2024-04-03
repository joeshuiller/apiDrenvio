"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const InvoicePayment_1 = __importDefault(require("../../db/models/InvoicePayment"));
class InvoicePaymentRepositoryImpl {
    registerAll(clientsId) {
        return new Promise((resolve, reject) => {
            InvoicePayment_1.default.findAll({
                where: {
                    billsId: clientsId,
                }
            }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    save(register) {
        return new Promise((resolve, reject) => {
            config_1.sequelize.transaction().then(t => {
                InvoicePayment_1.default.create(register, { transaction: t }).then(res => {
                    this.retrieveById(res.id)
                        .then((registerdata) => resolve(registerdata))
                        .catch(reject);
                }).then(() => {
                    t.commit();
                }).catch((err) => {
                    reject(err);
                    t.rollback();
                });
            });
        });
    }
    retrieveAll(searchParams) {
        throw new Error("Method not implemented.");
    }
    retrieveById(saveID) {
        return new Promise((resolve, reject) => {
            InvoicePayment_1.default.findOne({
                where: {
                    id: saveID
                }
            }).then(res => {
                console.log(res === null || res === void 0 ? void 0 : res.dataValues);
                resolve(res === null || res === void 0 ? void 0 : res.dataValues);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    update(readingConsumptions) {
        throw new Error("Method not implemented.");
    }
    delete(readingConsumptionsId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new InvoicePaymentRepositoryImpl();
//# sourceMappingURL=InvoicePaymentRepositoryImpl.js.map