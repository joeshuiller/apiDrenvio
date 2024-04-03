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
const RolApp_1 = __importDefault(require("./RolApp"));
const ClientsProyects_1 = __importDefault(require("./ClientsProyects"));
const TypesClients_1 = __importDefault(require("./TypesClients"));
const SocialStratum_1 = __importDefault(require("./SocialStratum"));
const Property_1 = __importDefault(require("./Property"));
const Bills_1 = __importDefault(require("./Bills"));
const PropertyServices_1 = __importDefault(require("./PropertyServices"));
const ReadingConsumption_1 = __importDefault(require("./ReadingConsumption"));
const Zone_1 = __importDefault(require("./Zone"));
const Services_1 = __importDefault(require("./Services"));
const AssignTechnician_1 = __importDefault(require("./AssignTechnician"));
const StatusServices_1 = __importDefault(require("./StatusServices"));
const TypesServices_1 = __importDefault(require("./TypesServices"));
const TechnicalService_1 = __importDefault(require("./TechnicalService"));
const InvoicePayment_1 = __importDefault(require("./InvoicePayment"));
const NoveltyInvoice_1 = __importDefault(require("./NoveltyInvoice"));
let UsersClient = class UsersClient extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UsersClient.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "surName", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "documentType", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "documentNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "sex", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "birthDate", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "telephone", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "img", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UsersClient.prototype, "passwordClient", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], UsersClient.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => RolApp_1.default),
    __metadata("design:type", RolApp_1.default)
], UsersClient.prototype, "RolApp", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => RolApp_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UsersClient.prototype, "rolAppId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TypesClients_1.default),
    __metadata("design:type", TypesClients_1.default)
], UsersClient.prototype, "TypesClients", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => TypesClients_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UsersClient.prototype, "typesClientsId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientsProyects_1.default),
    __metadata("design:type", ClientsProyects_1.default)
], UsersClient.prototype, "ClientsProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientsProyects_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UsersClient.prototype, "clientsProyectsId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => SocialStratum_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "SocialStratum", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Property_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "Property", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Bills_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "Bills", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => InvoicePayment_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "InvoicePayment", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => NoveltyInvoice_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "NoveltyInvoice", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PropertyServices_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "PropertyServices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => AssignTechnician_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "AssignTechnician", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Zone_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "Zone", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Services_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "Services", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ReadingConsumption_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "ReadingConsumption", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TechnicalService_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "TechnicalService", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TypesServices_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "TypesServices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => StatusServices_1.default),
    __metadata("design:type", Array)
], UsersClient.prototype, "StatusServices", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], UsersClient.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], UsersClient.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], UsersClient.prototype, "deleteAt", void 0);
UsersClient = __decorate([
    (0, sequelize_typescript_1.Table)({
        indexes: [
            { fields: ['documentNumber', 'telephone'], unique: true }
        ]
    })
], UsersClient);
exports.default = UsersClient;
//# sourceMappingURL=UsersClient.js.map