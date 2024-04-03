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
const UsersClient_1 = __importDefault(require("./UsersClient"));
const TypesClients_1 = __importDefault(require("./TypesClients"));
const Services_1 = __importDefault(require("./Services"));
const Zone_1 = __importDefault(require("./Zone"));
const SocialStratum_1 = __importDefault(require("./SocialStratum"));
const InvoicePayment_1 = __importDefault(require("./InvoicePayment"));
const NoveltyInvoice_1 = __importDefault(require("./NoveltyInvoice"));
const Property_1 = __importDefault(require("./Property"));
const PropertyServices_1 = __importDefault(require("./PropertyServices"));
const ReadingConsumption_1 = __importDefault(require("./ReadingConsumption"));
const Bills_1 = __importDefault(require("./Bills"));
const TechnicalService_1 = __importDefault(require("./TechnicalService"));
const TypesServices_1 = __importDefault(require("./TypesServices"));
const StatusServices_1 = __importDefault(require("./StatusServices"));
const AssignTechnician_1 = __importDefault(require("./AssignTechnician"));
const RolApp_1 = __importDefault(require("./RolApp"));
const BilledPeriods_1 = __importDefault(require("./BilledPeriods"));
const Periods_1 = __importDefault(require("./Periods"));
let ClientsProyects = class ClientsProyects extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ClientsProyects.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ClientsProyects.prototype, "nameProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ClientsProyects.prototype, "directionProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ClientsProyects.prototype, "documentProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ClientsProyects.prototype, "emailProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ClientsProyects.prototype, "telephoneProyects", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ClientsProyects.prototype, "signature", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], ClientsProyects.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ClientsProyects.prototype, "usersMaster", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => UsersClient_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "UsersClient", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TypesClients_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "TypesClients", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => SocialStratum_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "SocialStratum", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Property_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "Property", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Bills_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "Bills", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PropertyServices_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "PropertyServices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => InvoicePayment_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "InvoicePayment", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => NoveltyInvoice_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "NoveltyInvoice", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Zone_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "Zone", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Services_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "Services", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ReadingConsumption_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "ReadingConsumption", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TechnicalService_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "TechnicalService", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TypesServices_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "TypesServices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => StatusServices_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "StatusServices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => AssignTechnician_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "AssignTechnician", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => RolApp_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "RolApp", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => BilledPeriods_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "BilledPeriods", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Periods_1.default),
    __metadata("design:type", Array)
], ClientsProyects.prototype, "Periods", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ClientsProyects.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ClientsProyects.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ClientsProyects.prototype, "deleteAt", void 0);
ClientsProyects = __decorate([
    sequelize_typescript_1.Table
], ClientsProyects);
exports.default = ClientsProyects;
//# sourceMappingURL=ClientsProyects.js.map