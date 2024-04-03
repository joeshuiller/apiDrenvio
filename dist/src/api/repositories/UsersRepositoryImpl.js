"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../../db/models/Users"));
class UsersRepositoryImpl {
    usersSave(users) {
        return new Promise((resolve, reject) => {
            users.save().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    usersAll() {
        return new Promise((resolve, reject) => {
            Users_1.default.find().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    usersUsers(userId) {
        return new Promise((resolve, reject) => {
            Users_1.default.findOne({ _id: userId }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.default = new UsersRepositoryImpl();
//# sourceMappingURL=UsersRepositoryImpl.js.map