"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersClient_1 = __importDefault(require("../../db/models/UsersClient"));
const config_1 = require("../../config");
const utilityMethods_1 = __importDefault(require("../utils/utilityMethods"));
const sequelize_1 = require("sequelize");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UsersRepositoryImpl {
    constructor() {
        this.include = null;
        this.condition = null;
    }
    logout(item) {
        const authHeader = item.headers['authorization'];
        return new Promise((resolve, reject) => {
            if (authHeader) {
                jsonwebtoken_1.default.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
                    if (logout) {
                        resolve(logout);
                    }
                    else {
                        reject(err);
                    }
                });
            }
        });
    }
    usersPagination(item) {
        this.response = null;
        if (item.title) {
            this.condition = {
                name: { [sequelize_1.Op.like]: `%${item.title}%` },
                cliesntsProyectsId: parseInt(item.clientsId),
                rolAppId: parseInt(item.rolAppId),
            };
        }
        else {
            this.condition = {
                clientsProyectsId: parseInt(item.clientsId),
                rolAppId: parseInt(item.rolAppId),
            };
        }
        this.response = utilityMethods_1.default.pagination(UsersClient_1.default, item, this.include, this.condition);
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
    validEmail(email) {
        return new Promise((resolve, reject) => {
            UsersClient_1.default.findAll({
                where: {
                    email: email,
                }
            }).then(res => {
                var _a;
                resolve((_a = res[0]) === null || _a === void 0 ? void 0 : _a.dataValues);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            UsersClient_1.default.findOne({
                where: {
                    email: email,
                    passwordClient: password
                }
            }).then(res => {
                resolve(res === null || res === void 0 ? void 0 : res.dataValues);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    registerAll(registerId, rolAppId) {
        return new Promise((resolve, reject) => {
            UsersClient_1.default.findAll({
                where: {
                    clientsProyectsId: registerId,
                    rolAppId: rolAppId,
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
                UsersClient_1.default.create(register, { transaction: t }).then(res => {
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
            UsersClient_1.default.findOne({
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
exports.default = new UsersRepositoryImpl();
//# sourceMappingURL=UsersRepositoryImpl.js.map