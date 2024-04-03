"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cameraP = exports.welcome = void 0;
function welcome(req, res) {
    return res.json({ message: "Welcome to bezkoder application." });
}
exports.welcome = welcome;
function cameraP(req, res) {
    //var json =  JSON.stringify(req.body)
    //IOServer.IOSaveCameraP(json)
    return res.status(200).json({
        message: "camera Response",
        reqParamId: req.body
    });
}
exports.cameraP = cameraP;
//# sourceMappingURL=HomeController.js.map