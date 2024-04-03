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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_ts_1 = require("crypto-ts");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
//import UsersClient from '../../db/models/UsersClient';
class UtilityMethods {
    constructor() {
        this.dataList = [];
        this.getOffset = (page, limit) => {
            return (page * limit) - limit;
        };
        this.getNextPage = (page, limit, total) => {
            if ((total / limit) > page) {
                return page + 1;
            }
            return null;
        };
        this.getPreviousPage = (page) => {
            if (page <= 1) {
                return null;
            }
            return page - 1;
        };
    }
    createUsersFindPassword(register) {
        try {
            console.log(register);
            let registerEnd = register;
            const salt = bcrypt_1.default.genSaltSync(10);
            const hash = bcrypt_1.default.hashSync(register.passwordClient, salt);
            if (registerEnd.img) {
                registerEnd.img = this.imgProcessBase64(registerEnd.img, '.jpg');
            }
            registerEnd.passwordClient = hash;
            return registerEnd;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    createJwt(req) {
        try {
            const SECRET_KEY = process.env.SECRET_KEY;
            var token = jsonwebtoken_1.default.sign({
                id: req.id,
                name: req.name,
                email: req.email
            }, SECRET_KEY, {
                expiresIn: '1 days',
            });
            return token;
        }
        catch (error) {
            return error;
        }
    }
    imgProcessBase64(image, type) {
        let pathList = 'images/' + Date.now() + type;
        let base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        fs_1.default.writeFileSync(path_1.default.join(path_1.default.resolve('.'), pathList), base64Data, { encoding: 'base64' });
        return pathList;
    }
    toBase64(filePath) {
        console.log(filePath);
        const img = fs_1.default.readFileSync(filePath);
        return Buffer.from(img).toString('base64');
    }
    createtoken(token) {
        try {
            return crypto_ts_1.AES.encrypt(token, 'Softsaenz').toString().replace("/", '').replace("=", '');
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    paginate(model, pageSize, pageLimit, search = {}, order = [], transform) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = parseInt(pageLimit, 10) || 10;
                const page = parseInt(pageSize, 10) || 1;
                // create an options object
                let options = {
                    offset: this.getOffset(page, limit),
                    limit: limit,
                };
                // check if the search object is empty
                if (Object.keys(search).length) {
                    //options = {options, ...search};
                }
                // check if the order array is empty
                if (order && order.length) {
                    options['order'] = order;
                }
                // take in the model, take in the options
                let { count, rows } = yield model.findAndCountAll(options);
                // check if the transform is a function and is not null
                if (transform && typeof transform === 'function') {
                    rows = transform(rows);
                }
                return {
                    previousPage: this.getPreviousPage(page),
                    currentPage: page,
                    nextPage: this.getNextPage(page, limit, count),
                    total: count,
                    limit: limit,
                    data: rows
                };
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    pagination(model, item, include, where) {
        return __awaiter(this, void 0, void 0, function* () {
            const limit = parseInt(item.size, 10) || 10;
            const page = parseInt(item.page, 10) || 1;
            const offset = this.getOffset(page, limit);
            console.log(item);
            let data = yield model.findAndCountAll({
                where: where,
                include: include,
                limit,
                offset,
            });
            return this.getPagingData(data, item.page, limit);
        });
    }
    getPagingData(data, page, limit) {
        const { count: totalItems, rows: listData } = data;
        return {
            previousPage: this.getPreviousPage(page),
            currentPage: page,
            nextPage: this.getNextPage(page, limit, totalItems),
            total: totalItems,
            limit: limit,
            list: this.processData(listData)
        };
    }
    ;
    whereCondition(item) {
        let condition = null;
        if (item.title) {
            condition = {
                name: { [sequelize_1.Op.like]: `%${item.title}%` },
                cliesntsProyectsId: parseInt(item.clientsId),
            };
        }
        else {
            condition = {
                clientsProyectsId: parseInt(item.clientsId),
            };
        }
        return condition;
    }
    whereBillCondition(item) {
        let condition = null;
        if (item.title) {
            condition = {
                clientsProyectsId: item.clientsId,
            };
        }
        else {
            condition = {
                clientsProyectsId: parseInt(item.clientsId),
            };
        }
        return condition;
    }
    codeList(item, clientsId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let condition = yield item.findAll({
                where: {
                    clientsProyectsId: clientsId,
                },
            });
            console.log("printList", condition);
            let codeList = "";
            let ultimate = condition[condition.length - 1];
            if (ultimate) {
                codeList = this.resultCode(ultimate.code, code);
            }
            else {
                codeList = code + '-' + '00001';
            }
            return codeList;
        });
    }
    resultCode(item, code) {
        let codeNew = item.replace(code + '-', '');
        let valid = codeNew.substring(0, 4);
        let valid1 = codeNew.substring(0, 3);
        let valid2 = codeNew.substring(0, 2);
        let valid3 = codeNew.substring(0, 1);
        const num = "0000";
        const num1 = "000";
        const num2 = "00";
        const num3 = "0";
        let suma = parseInt(codeNew.replace('0', '')) + 1;
        let codeEnd = "";
        if (valid === num) {
            codeEnd = this.validCode(suma, num, code);
        }
        else if (valid1 === num1) {
            codeEnd = this.validCode(suma, num1, code);
        }
        else if (valid2 === num2) {
            codeEnd = this.validCode(suma, num2, code);
        }
        else if (valid3 === num3) {
            codeEnd = this.validCode(suma, num3, code);
        }
        else {
            codeEnd = code + '-' + suma;
        }
        console.log("printList", codeEnd);
        return codeEnd;
    }
    codeListDirect(item, clientsId, code) {
        let condition = item.findAll({
            where: {
                clientsProyectsId: clientsId,
            },
        });
        console.log("printList", condition);
        let codeList = "";
        let ultimate = condition[condition.length - 1];
        if (ultimate) {
            codeList = this.resultCodeDirect(ultimate.code, code, 1);
        }
        else {
            codeList = code + '-' + '00001';
        }
        return codeList;
    }
    resultCodeDirect(item, code, attempts) {
        let codeEnd = "";
        if (attempts === 0) {
            codeEnd = item;
        }
        else {
            let codeNew = item.replace(code + '-', '');
            let valid = codeNew.substring(0, 4);
            let valid1 = codeNew.substring(0, 3);
            let valid2 = codeNew.substring(0, 2);
            let valid3 = codeNew.substring(0, 1);
            const num = "0000";
            const num1 = "000";
            const num2 = "00";
            const num3 = "0";
            let suma = parseInt(codeNew.replace('0', '')) + attempts;
            if (valid === num) {
                codeEnd = this.validCode(suma, num, code);
            }
            else if (valid1 === num1) {
                codeEnd = this.validCode(suma, num1, code);
            }
            else if (valid2 === num2) {
                codeEnd = this.validCode(suma, num2, code);
            }
            else if (valid3 === num3) {
                codeEnd = this.validCode(suma, num3, code);
            }
            else {
                codeEnd = code + '-' + suma;
            }
        }
        console.log(codeEnd);
        return codeEnd;
    }
    validCode(suma, num, code) {
        let codeEnd = "";
        const num1 = "000";
        const num2 = "00";
        const num3 = "0";
        if (suma > 9) {
            codeEnd = code + '-' + num1 + suma;
        }
        else if (suma > 99) {
            codeEnd = code + '-' + num2 + suma;
        }
        else if (suma > 999) {
            codeEnd = code + '-' + num3 + suma;
        }
        else {
            codeEnd = code + '-' + num + suma;
        }
        console.log(codeEnd);
        return codeEnd;
    }
    resultSumaResta(item) {
        let dataLis = [];
        item.forEach(element => {
            let end = {
                id: element.id,
                result: this.result(element.Services.FixedCharge)
            };
            dataLis.push(end);
        });
        return dataLis;
    }
    result(item) {
        var restas = 0;
        var suman = 0;
        item.forEach(element => {
            if (element.description === "Subsidio Cargo fijo" || element.description === "Subsidio Consumo") {
                restas += parseFloat(element.consumptionValue);
            }
            else {
                suman += parseFloat(element.consumptionValue);
            }
        });
        return suman - restas;
    }
    calculate(item) {
        let dataList = {
            totalPayments: 0,
            totalCount: 0
        };
        if (item.InvoicePayment.length != 0) {
            item.InvoicePayment.forEach(element => {
                dataList.totalPayments += (parseFloat(element.fertilizers) - parseFloat(element.discount));
            });
        }
        else {
            dataList.totalCount += 1;
        }
        return dataList;
    }
    processData(item) {
        let respList = [];
        item.forEach(element => {
            let data = {
                id: element.id,
                code: element.code,
                status: element.status,
                usersCreate: element.usersCreate,
                periodsId: element.periodsId,
                billedPeriodsId: element.billedPeriodsId,
                propertyId: element.propertyId,
                usersClientId: element.usersClientId,
                clientsProyectsId: element.clientsProyectsId,
                valuePayPeriod: this.resultSumaResta(element.Property.PropertyServices),
                amountToBePaid: this.calculate(element.Property),
                createdAt: element.createdAt,
                updatedAt: element.updatedAt,
                deleteAt: null,
                usersClient: {
                    name: element.usersClient.name,
                    surName: element.usersClient.surName,
                    documentType: element.usersClient.documentType,
                    documentNumber: element.usersClient.documentNumber,
                    sex: element.usersClient.sex,
                    telephone: element.usersClient.telephone,
                    email: element.usersClient.email,
                    img: element.usersClient.img,
                    status: element.usersClient.status,
                    createdAt: element.usersClient.createdAt,
                    updatedAt: element.usersClient.updatedAt,
                    deleteAt: element.usersClient.deleteAt
                },
                BilledPeriods: element.BilledPeriods,
                Periods: element.Periods,
                NoveltyInvoice: element.NoveltyInvoice,
                Property: element.Property,
            };
            respList.push(data);
        });
        return respList;
    }
}
exports.default = new UtilityMethods();
//# sourceMappingURL=utilityMethods.js.map