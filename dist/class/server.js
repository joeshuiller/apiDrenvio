"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const https = __importStar(require("https"));
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../src/config");
const socket_1 = __importDefault(require("../src/socket/socket"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.https_options = {
            key: fs_1.default.readFileSync(path_1.default.join(path_1.default.resolve('.'), '/class/crt/local/server.key')),
            cert: fs_1.default.readFileSync(path_1.default.join(path_1.default.resolve('.'), '/class/crt/local/server.crt')),
            ca: [
                fs_1.default.readFileSync(path_1.default.join(path_1.default.resolve('.'), '/class/crt/local/server.crt')),
                fs_1.default.readFileSync(path_1.default.join(path_1.default.resolve('.'), '/class/crt/local/server.crt'))
            ]
        };
        this.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
        this.HOST = process.env.HOST ? process.env.HOST : "localhost";
        this.serverIO = socket_1.default.instance;
        this.app = (0, express_1.default)();
        this.httpsServer = https.createServer(this.https_options, this.app);
        this.serverIO.IOServerList(this.httpsServer);
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            dotenv_1.default.config();
            const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
            const HOST = process.env.HOST ? process.env.HOST : "localhost";
            yield config_1.sequelize.authenticate().then(() => {
                console.log('Connection has been established successfully.');
            }).catch((error) => {
                console.error('Unable to connect to the database: ', error);
            });
            this.httpsServer.listen(PORT, HOST, function () {
                console.log(`Server is running on port ${HOST}:${PORT}.`);
            }).on("error", (err) => {
                if (err.code === "EADDRINUSE") {
                    console.log("Error: address already in use");
                }
                else {
                    console.log(err);
                }
            });
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map