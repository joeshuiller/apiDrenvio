"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cameraP = void 0;
function cameraP(req, res) {
    return res.status(200).json({
        message: "camera Response",
        reqParamId: req.body
    });
}
exports.cameraP = cameraP;
//# sourceMappingURL=CameraPController.js.map