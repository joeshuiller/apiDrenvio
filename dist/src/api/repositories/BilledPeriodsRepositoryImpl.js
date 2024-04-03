"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const BilledPeriods_1 = __importDefault(require("../../db/models/BilledPeriods"));
const Bills_1 = __importDefault(require("../../db/models/Bills"));
const FixedCharge_1 = __importDefault(require("../../db/models/FixedCharge"));
const Periods_1 = __importDefault(require("../../db/models/Periods"));
const Property_1 = __importDefault(require("../../db/models/Property"));
const PropertyServices_1 = __importDefault(require("../../db/models/PropertyServices"));
const Services_1 = __importDefault(require("../../db/models/Services"));
const UsersClient_1 = __importDefault(require("../../db/models/UsersClient"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
class BilledPeriodsRepositoryImpl {
    constructor() {
        this.include = null;
        this.condition = null;
    }
    billedPeriodsPagination(item) {
        console.log(item);
        this.response = null;
        this.condition = null;
        this.include = [
            Bills_1.default,
            Periods_1.default,
        ];
        this.condition = utilityMethods_1.default.whereCondition(item);
        this.response = utilityMethods_1.default.pagination(BilledPeriods_1.default, item, this.include, this.condition);
        console.log(this.response);
        return new Promise((resolve, reject) => {
            if (this.response.message == undefined) {
                resolve(this.response);
            }
            else {
                reject(this.response);
            }
        });
    }
    agruopListBill(item) {
        return new Promise((resolve, reject) => {
            BilledPeriods_1.default.findAll({
                where: {
                    clientsProyectsId: item.clientsId,
                },
                group: 'facturationPeriod',
                include: [
                    UsersClient_1.default,
                    { model: Property_1.default,
                        include: [{
                                model: PropertyServices_1.default,
                                include: [{
                                        model: Services_1.default,
                                        include: [{
                                                model: FixedCharge_1.default
                                            }]
                                    }]
                            }] }
                ]
            }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    registerAll(clientsId) {
        return new Promise((resolve, reject) => {
            BilledPeriods_1.default.findAll({
                where: {
                    clientsProyectsId: clientsId,
                },
                include: [
                    UsersClient_1.default,
                    { model: Property_1.default,
                        include: [{
                                model: PropertyServices_1.default,
                                include: [{
                                        model: Services_1.default,
                                        include: [{
                                                model: FixedCharge_1.default
                                            }]
                                    }]
                            }] }
                ]
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
                BilledPeriods_1.default.create(register, { transaction: t }).then(res => {
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
            BilledPeriods_1.default.findOne({
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
    update(BilledPeriods) {
        throw new Error("Method not implemented.");
    }
    delete(BilledPeriodsId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new BilledPeriodsRepositoryImpl();
//# sourceMappingURL=BilledPeriodsRepositoryImpl.js.map