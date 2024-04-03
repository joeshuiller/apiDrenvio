"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./class/server"));
const src_1 = __importDefault(require("./src"));
const server = server_1.default.instance;
new src_1.default(server.app);
server.start();
//# sourceMappingURL=index.js.map