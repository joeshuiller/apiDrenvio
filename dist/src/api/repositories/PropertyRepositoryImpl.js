"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../../config");
const Property_1 = __importDefault(require("../../db/models/Property"));
const SocialStratum_1 = __importDefault(require("../../db/models/SocialStratum"));
const Zone_1 = __importDefault(require("../../db/models/Zone"));
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
class PropertyRepositoryImpl {
    constructor() {
        this.include = null;
        this.condition = null;
    }
    registerBilledPeriods(clientsProyectsId) {
        this.include = [Zone_1.default, SocialStratum_1.default];
        return new Promise((resolve, reject) => {
            Property_1.default.findAll({
                where: {
                    clientsProyectsId: clientsProyectsId,
                },
                include: this.include
            }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    propertyPagination(item) {
        this.response = null;
        this.include = [Zone_1.default, SocialStratum_1.default];
        this.response = null;
        this.condition = null;
        if (item.title) {
            this.condition = {
                name: { [sequelize_1.Op.like]: `%${item.title}%` },
                usersClientId: parseInt(item.usersClientId),
            };
        }
        else {
            this.condition = {
                usersClientId: parseInt(item.usersClientId),
            };
        }
        this.response = utilityMethods_1.default.pagination(Property_1.default, item, this.include, this.condition);
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
        this.include = [Zone_1.default, SocialStratum_1.default];
        return new Promise((resolve, reject) => {
            Property_1.default.findAll({
                where: {
                    usersClientId: clientsId,
                },
                include: this.include
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
                Property_1.default.create(register, { transaction: t }).then(res => {
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
            Property_1.default.findOne({
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
exports.default = new PropertyRepositoryImpl();
//# sourceMappingURL=PropertyRepositoryImpl.js.map