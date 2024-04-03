"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_DATABASE;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbSocketPath = process.env.DB_SOCKET;
//const dbHost = process.env.DB_HOST as string
//console.log(dbName,dbUser, dbPassword)
const dbDialect = "mysql";
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: dbDialect,
    database: dbName,
    username: dbUser,
    password: dbPassword,
    dialectOptions: {
        socketPath: dbSocketPath
    },
    models: [__dirname + '/db/models']
});
//# sourceMappingURL=config.js.map