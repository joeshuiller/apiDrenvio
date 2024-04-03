"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const message = (socket, io) => {
    socket.on('new-message', (payload) => {
        console.log('Mensaje', payload);
        io.sockets.emit('new-message-list', payload);
    });
};
exports.message = message;
//# sourceMappingURL=messege.js.map