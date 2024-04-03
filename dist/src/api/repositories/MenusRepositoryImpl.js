"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const Menu_1 = __importDefault(require("../../db/models/Menu"));
class MenusRepositoryImpl {
    retrieveByIdRol(registerId) {
        return new Promise((resolve, reject) => {
            Menu_1.default.findAll({
                where: {
                    rolAppId: registerId,
                }
            }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    retrieveByIdAll() {
        return new Promise((resolve, reject) => {
            Menu_1.default.findAll().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    retrieveByIdUsers(usersClientId) {
        return new Promise((resolve, reject) => {
            Menu_1.default.findOne({
                where: {
                    rolAppId: usersClientId,
                }
            }).then(res => {
                resolve(res === null || res === void 0 ? void 0 : res.dataValues);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    save(register) {
        return new Promise((resolve, reject) => {
            config_1.sequelize.transaction().then(t => {
                Menu_1.default.create(register, { transaction: t }).then(res => {
                    this.retrieveById(res.id.toString())
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
    retrieveById(registerId) {
        return new Promise((resolve, reject) => {
            Menu_1.default.findOne({
                where: {
                    id: registerId,
                }
            }).then(res => {
                resolve(res === null || res === void 0 ? void 0 : res.dataValues);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    update(register) {
        throw new Error("Method not implemented.");
    }
    delete(registerId) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new MenusRepositoryImpl();
//# sourceMappingURL=MenusRepositoryImpl.js.map