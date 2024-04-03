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
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const envets = __importStar(require("./events"));
class IOServer {
    IOServerList(httpServer) {
        console.log('Auth cel', "token");
        this.io = new socket_io_1.Server(httpServer, {
            cors: {
                origin: ["http://localhost:8888", "http://localhost:4200", "http://127.0.0.1:4201", "https://clients.softsaenz.com.co"],
                methods: ["GET", "POST"],
                allowedHeaders: ["my-custom-header"],
                credentials: true
            }
        });
        console.log('Auth token', "token");
        this.IOValidConection();
        console.log('Auth token', "token");
        this.IOConection();
    }
    IOValidConection() {
        this.io.use((socket, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = socket.handshake.query.Authorization;
                console.log('Auth token', token);
                // here socket.handshake.auth.token is passed from client and it needs to be validated from DB or other sources..
                try {
                    // here socket.handshake.auth.token is passed from client and it needs to be validated from DB or other sources..
                    if (socket.handshake.query.Authorization === 'json-web-token') {
                        next();
                    }
                    else {
                        const err = new Error('unauthorized');
                        next(err);
                    }
                }
                catch (e) {
                    next(new Error('unauthorized'));
                }
            }
            catch (e) {
                next(new Error('unauthorized'));
            }
        }));
    }
    IOConection() {
        this.io.on("connection", (socket) => {
            const token = socket.handshake.query.Authorization;
            console.log('Auth token', token);
            try {
                if (token !== "json-web-token") {
                    socket.disconnect(true);
                }
            }
            catch (error) {
                socket.disconnect(true);
            }
            console.log('cliente conectado');
            // A client is disconnected.
            envets.disconnect(socket);
            // message
            envets.message(socket, this.io);
        });
    }
    IOSaveCameraPush(camera) {
        this.io.sockets.emit("new-message", camera);
    }
    IOSaveCameraP(camera) {
        this.io.sockets.emit("messagesCamera", camera);
    }
    static get instance() {
        return this._instanceIO || (this._instanceIO = new this());
    }
}
exports.default = IOServer;
//# sourceMappingURL=socket.js.map