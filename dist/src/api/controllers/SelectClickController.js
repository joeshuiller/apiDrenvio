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
const socket_1 = __importDefault(require("../../socket/socket"));
class SelectClickController {
    constructor() {
        this.serverIO = socket_1.default.instance;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                this.serverIO.IOSaveCameraPush(req.body);
                res.status(201).json({
                    message: "create OK",
                    reqBody: req.body,
                    code: res.status
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
exports.default = SelectClickController;
//# sourceMappingURL=SelectClickController.js.map