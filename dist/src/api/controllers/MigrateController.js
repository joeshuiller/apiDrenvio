"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
class MigrateController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let createList = "";
                yield config_1.sequelize.sync({ force: true }).then(() => {
                    createList = 'Connection has been established successfully.';
                }).catch((error) => {
                    createList = 'Unable to connect to the database: ' + error;
                });
                res.status(200).json({
                    message: "Migrate Response",
                    migrate: createList
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    message: "Internal Server Error!",
                    error: err
                });
            }
        });
    }
    authList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let createList = "";
                yield config_1.sequelize.authenticate().then(() => {
                    createList = 'Connection has been established successfully.';
                }).catch((error) => {
                    createList = 'Unable to connect to the database: ' + error;
                });
                res.status(200).json({
                    message: "Migrate Response",
                    migrate: createList
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    message: "Internal Server Error!",
                    error: err
                });
            }
        });
    }
}
exports.default = MigrateController;
//# sourceMappingURL=MigrateController.js.map