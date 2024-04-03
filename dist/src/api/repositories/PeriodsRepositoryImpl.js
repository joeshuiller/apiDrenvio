"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const Periods_1 = __importDefault(require("../../db/models/Periods"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
class PeriodsRepositoryImpl {
    constructor() {
        this.include = null;
        this.condition = null;
    }
    periodsPagination(item) {
        console.log(item);
        this.response = null;
        this.condition = null;
        this.condition = utilityMethods_1.default.whereCondition(item);
        this.response = utilityMethods_1.default.pagination(Periods_1.default, item, this.include, this.condition);
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
    registerAll(clientsId) {
        return new Promise((resolve, reject) => {
            Periods_1.default.findAll({
                where: {
                    clientsProyectsId: clientsId,
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
                Periods_1.default.create(register, { transaction: t }).then(res => {
                    this.retrieveById(res.name, res.id)
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
    retrieveById(registerId, saveID) {
        return new Promise((resolve, reject) => {
            Periods_1.default.findOne({
                where: {
                    id: saveID,
                    name: registerId
                }
            }).then(res => {
                console.log(res === null || res === void 0 ? void 0 : res.dataValues);
                resolve(res === null || res === void 0 ? void 0 : res.dataValues);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    update(Periods) {
        throw new Error("Method not implemented.");
    }
    delete(PeriodsId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new PeriodsRepositoryImpl();
//# sourceMappingURL=PeriodsRepositoryImpl.js.map