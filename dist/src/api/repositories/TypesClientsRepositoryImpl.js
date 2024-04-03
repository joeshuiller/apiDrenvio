"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const TypesClients_1 = __importDefault(require("../../db/models/TypesClients"));
class TypesClientsRepositoryImpl {
    validEmail(email) {
        return new Promise((resolve, reject) => {
            TypesClients_1.default.findAll({
                where: {
                    name: email,
                }
            }).then(res => {
                resolve(res[0].dataValues);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    registerAll(clientsId) {
        return new Promise((resolve, reject) => {
            TypesClients_1.default.findAll({
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
                TypesClients_1.default.create(register, { transaction: t }).then(res => {
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
            TypesClients_1.default.findOne({
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
    update(TypesClients) {
        throw new Error("Method not implemented.");
    }
    delete(TypesClientsId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new TypesClientsRepositoryImpl();
//# sourceMappingURL=TypesClientsRepositoryImpl.js.map