"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const strong_error_handler_1 = __importDefault(require("strong-error-handler"));
const routes_1 = __importDefault(require("./api/routes"));
const path_1 = __importDefault(require("path"));
class ServerLink {
    constructor(app) {
        this.config(app);
        new routes_1.default(app);
    }
    config(app) {
        // middleware for parsing application/x-www-form-urlencoded
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.static(path_1.default.join(__dirname, '/images')));
        app.use('/', express_1.default.static(`${__dirname}/images`));
        app.get('/images/:img', function (req, res) {
            res.sendFile(path_1.default.join(path_1.default.resolve('.'), `/images/${req.params.img}`));
        });
        // middleware for json body parsing
        app.use(body_parser_1.default.json({ limit: '5mb' }));
        // enable corse for all origins
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        /* app.use(cors(corsOptions));
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: true })); */
        app.use((0, strong_error_handler_1.default)({
            debug: process.env.ENV !== 'prod',
            log: true,
        }));
    }
}
exports.default = ServerLink;
//# sourceMappingURL=index.js.map