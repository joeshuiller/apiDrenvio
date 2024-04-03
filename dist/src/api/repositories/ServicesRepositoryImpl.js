"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const Services_1 = __importDefault(require("../../db/models/Services"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
class ServicesRepositoryImpl {
    constructor() {
        this.include = null;
        this.condition = null;
    }
    servicesPagination(item) {
        console.log(item);
        this.response = null;
        this.condition = null;
        this.condition = utilityMethods_1.default.whereCondition(item);
        this.response = utilityMethods_1.default.pagination(Services_1.default, item, this.include, this.condition);
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
            Services_1.default.findAll({
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
                Services_1.default.create(register, { transaction: t }).then(res => {
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
            Services_1.default.findOne({
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
    update(services) {
        throw new Error("Method not implemented.");
    }
    delete(servicesId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new ServicesRepositoryImpl();
//# sourceMappingURL=ServicesRepositoryImpl.js.map