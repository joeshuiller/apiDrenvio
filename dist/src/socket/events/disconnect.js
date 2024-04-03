"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = void 0;
const disconnect = (socket) => {
    socket.on('disconnect', () => {
        console.log("disconnect");
    });
};
exports.disconnect = disconnect;
//# sourceMappingURL=disconnect.js.map