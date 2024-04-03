"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
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
const Zone_1 = __importDefault(require("../../db/models/Zone"));
const SocialStratum_1 = __importDefault(require("../../db/models/SocialStratum"));
const ReadingConsumption_1 = __importDefault(require("../../db/models/ReadingConsumption"));
const InvoicePayment_1 = __importDefault(require("../../db/models/InvoicePayment"));
const NoveltyInvoice_1 = __importDefault(require("../../db/models/NoveltyInvoice"));
class BillsRepositoryImpl {
    constructor() {
        this.include = null;
        this.condition = null;
    }
    queryBills(clientsId) {
        if (clientsId.zoneId && !clientsId.socialStratumId) {
            this.condition = {
                zoneId: clientsId.zoneId,
                status: true,
            };
        }
        else if (!clientsId.zoneId && clientsId.socialStratumId) {
            this.condition = {
                zoneId: clientsId.socialStratumId,
                status: true
            };
        }
        else if (clientsId.zoneId && clientsId.socialStratumId) {
            this.condition = {
                zoneId: clientsId.zoneId,
                socialStratumId: clientsId.socialStratumId,
                status: true
            };
        }
        else {
            this.condition = {
                status: true,
            };
        }
        this.include = [
            UsersClient_1.default,
            BilledPeriods_1.default,
            Periods_1.default,
            NoveltyInvoice_1.default,
            { model: Property_1.default,
                where: this.condition,
                include: [
                    {
                        model: PropertyServices_1.default,
                        include: [{
                                model: Services_1.default,
                                include: [{
                                        model: FixedCharge_1.default
                                    }]
                            }]
                    },
                    {
                        model: Zone_1.default,
                    },
                    {
                        model: SocialStratum_1.default,
                    },
                    {
                        model: ReadingConsumption_1.default
                    },
                    {
                        model: InvoicePayment_1.default,
                    }
                ]
            },
        ];
        return new Promise((resolve, reject) => {
            Bills_1.default.findAll({
                where: {
                    periodsId: clientsId.periodsId,
                    clientsProyectsId: clientsId.clientsProyectsId,
                },
                include: this.include
            }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    accumulatedDebtsById(propertyId) {
        return new Promise((resolve, reject) => {
            Bills_1.default.findAll({
                where: {
                    propertyId: propertyId,
                    status: true
                },
                include: [
                    BilledPeriods_1.default,
                    InvoicePayment_1.default,
                    NoveltyInvoice_1.default,
                ]
            }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    billsPagination(item) {
        console.log(item);
        this.response = null;
        if (item.title) {
            this.condition = {
                name: { [sequelize_1.Op.like]: `%${item.title}%` },
                billedPeriodsId: parseInt(item.billedPeriodsId),
                cliesntsProyectsId: parseInt(item.clientsId),
            };
        }
        else {
            this.condition = {
                billedPeriodsId: parseInt(item.billedPeriodsId),
                clientsProyectsId: parseInt(item.clientsId),
            };
        }
        this.include = [
            UsersClient_1.default,
            BilledPeriods_1.default,
            Periods_1.default,
            NoveltyInvoice_1.default,
            { model: Property_1.default,
                include: [
                    {
                        model: PropertyServices_1.default,
                        include: [{
                                model: Services_1.default,
                                include: [{
                                        model: FixedCharge_1.default
                                    }]
                            }]
                    },
                    {
                        model: Zone_1.default,
                    },
                    {
                        model: SocialStratum_1.default,
                    },
                    {
                        model: ReadingConsumption_1.default
                    },
                    {
                        model: InvoicePayment_1.default,
                    }
                ]
            },
        ];
        this.condition = utilityMethods_1.default.whereCondition(item);
        this.response = utilityMethods_1.default.pagination(Bills_1.default, item, this.include, this.condition);
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
            Bills_1.default.findAll({
                where: {
                    clientsProyectsId: item.clientsId,
                },
                group: 'facturationPeriod',
                include: [
                    UsersClient_1.default,
                    BilledPeriods_1.default,
                    Periods_1.default,
                    InvoicePayment_1.default,
                    NoveltyInvoice_1.default,
                    { model: Property_1.default,
                        include: [
                            {
                                model: PropertyServices_1.default,
                                include: [{
                                        model: Services_1.default,
                                        include: [{
                                                model: FixedCharge_1.default
                                            }]
                                    }]
                            },
                            {
                                model: Zone_1.default,
                            },
                            {
                                model: SocialStratum_1.default,
                            },
                            {
                                model: ReadingConsumption_1.default
                            }
                        ]
                    },
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
            Bills_1.default.findAll({
                where: {
                    clientsProyectsId: clientsId,
                },
                include: [
                    UsersClient_1.default,
                    BilledPeriods_1.default,
                    Periods_1.default,
                    InvoicePayment_1.default,
                    NoveltyInvoice_1.default,
                    { model: Property_1.default,
                        include: [
                            {
                                model: PropertyServices_1.default,
                                include: [{
                                        model: Services_1.default,
                                        include: [{
                                                model: FixedCharge_1.default
                                            }]
                                    }]
                            },
                            {
                                model: Zone_1.default,
                            },
                            {
                                model: SocialStratum_1.default,
                            },
                            {
                                model: ReadingConsumption_1.default
                            }
                        ]
                    },
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
            console.log(register);
            let dataList = [];
            let count = 0;
            register.forEach(element => {
                console.log(count);
                const dataSave = {
                    id: 0,
                    code: utilityMethods_1.default.resultCodeDirect(element.code, 'FCT', count),
                    propertyId: element.propertyId,
                    usersCreate: element.usersCreate,
                    status: element.status,
                    usersClientId: element.usersClientId,
                    clientsProyectsId: element.clientsProyectsId,
                    periodsId: element.periodsId,
                    billedPeriodsId: element.billedPeriodsId
                };
                console.log(dataSave);
                config_1.sequelize.transaction().then(t => {
                    Bills_1.default.create(dataSave, { transaction: t }).then(res => {
                        dataList.push(res);
                    }).then(() => {
                        t.commit();
                    }).catch((err) => {
                        reject(err);
                        t.rollback();
                    });
                });
                count++;
            });
            resolve(dataList);
        });
    }
    retrieveAll(searchParams) {
        throw new Error("Method not implemented.");
    }
    retrieveById(saveID) {
        return new Promise((resolve, reject) => {
            Bills_1.default.findOne({
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
    update(bills) {
        return new Promise((resolve, reject) => {
            Bills_1.default.update(bills, {
                where: {
                    id: bills.id
                }
            }).then(res => {
                console.log(res);
                resolve(res[0]);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    delete(billsId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new BillsRepositoryImpl();
//# sourceMappingURL=BillsRepositoryImpl.js.map