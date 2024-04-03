"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const ClientsProyects_1 = __importDefault(require("./ClientsProyects"));
const UsersClient_1 = __importDefault(require("./UsersClient"));
const TypesServices_1 = __importDefault(require("./TypesServices"));
const StatusServices_1 = __importDefault(require("./StatusServices"));
const AssignTechnician_1 = __importDefault(require("./AssignTechnician"));
let TechnicalService = class TechnicalService extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TechnicalService.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TechnicalService.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], TechnicalService.prototype, "descriptionService", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], TechnicalService.prototype, "serviceDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DOUBLE),
    __metadata("design:type", Number)
], TechnicalService.prototype, "latitudService", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DOUBLE),
    __metadata("design:type", Number)
], TechnicalService.prototype, "logitudService", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], TechnicalService.prototype, "descriptionServiceTechnical", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], TechnicalService.prototype, "serviceDateTechnical", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TechnicalService.prototype, "imgTechnical", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DOUBLE),
    __metadata("design:type", Number)
], TechnicalService.prototype, "latitudServiceTechnical", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DOUBLE),
    __metadata("design:type", Number)
], TechnicalService.prototype, "logitudServiceTechnical", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => StatusServices_1.default),
    __metadata("design:type", StatusServices_1.default)
], TechnicalService.prototype, "StatusServices", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => StatusServices_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TechnicalService.prototype, "statusServicesId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TypesServices_1.default),
    __metadata("design:type", TypesServices_1.default)
], TechnicalService.prototype, "TypesServices", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => TypesServices_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TechnicalService.prototype, "typesServicesId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => UsersClient_1.default),
    __metadata("design:type", UsersClient_1.default)
], TechnicalService.prototype, "usersClient", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UsersClient_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TechnicalService.prototype, "usersClientId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientsProyects_1.default),
    __metadata("design:type", ClientsProyects_1.default)
], TechnicalService.prototype, "ClientsProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientsProyects_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TechnicalService.prototype, "clientsProyectsId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => AssignTechnician_1.default),
    __metadata("design:type", Array)
], TechnicalService.prototype, "AssignTechnician", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], TechnicalService.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], TechnicalService.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], TechnicalService.prototype, "deleteAt", void 0);
TechnicalService = __decorate([
    (0, sequelize_typescript_1.Table)({
        indexes: [
            { fields: ['code'], unique: true }
        ]
    })
], TechnicalService);
exports.default = TechnicalService;
//# sourceMappingURL=TechnicalService.js.map