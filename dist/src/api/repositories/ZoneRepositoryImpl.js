"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const Zone_1 = __importDefault(require("../../db/models/Zone"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
class ZoneRepositoryImpl {
    constructor() {
        this.include = null;
        this.condition = null;
    }
    zonePagination(item) {
        this.response = null;
        this.condition = null;
        this.condition = utilityMethods_1.default.whereCondition(item);
        this.response = utilityMethods_1.default.pagination(Zone_1.default, item, this.include, this.condition);
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
    registerAll(registerId) {
        return new Promise((resolve, reject) => {
            Zone_1.default.findAll({
                where: {
                    clientsProyectsId: registerId,
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
                Zone_1.default.create(register, { transaction: t }).then(res => {
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
    retrieveById(registerId, saveID) {
        return new Promise((resolve, reject) => {
            Zone_1.default.findOne({
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
    update(users) {
        throw new Error("Method not implemented.");
    }
    delete(usersId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new ZoneRepositoryImpl();
//# sourceMappingURL=ZoneRepositoryImpl.js.map