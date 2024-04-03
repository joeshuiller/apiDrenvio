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
const Zone_1 = __importDefault(require("./Zone"));
const SocialStratum_1 = __importDefault(require("./SocialStratum"));
const UsersClient_1 = __importDefault(require("./UsersClient"));
const PropertyServices_1 = __importDefault(require("./PropertyServices"));
const ReadingConsumption_1 = __importDefault(require("./ReadingConsumption"));
const Bills_1 = __importDefault(require("./Bills"));
const InvoicePayment_1 = __importDefault(require("./InvoicePayment"));
let Property = class Property extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Property.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Property.prototype, "code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Property.prototype, "cadastre", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Property.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DOUBLE),
    __metadata("design:type", Number)
], Property.prototype, "latitud", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DOUBLE),
    __metadata("design:type", Number)
], Property.prototype, "longitud", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Property.prototype, "usersCreate", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], Property.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Zone_1.default),
    __metadata("design:type", Zone_1.default)
], Property.prototype, "Zone", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Zone_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Property.prototype, "zoneId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => SocialStratum_1.default),
    __metadata("design:type", SocialStratum_1.default)
], Property.prototype, "SocialStratum", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SocialStratum_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Property.prototype, "socialStratumId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => UsersClient_1.default),
    __metadata("design:type", UsersClient_1.default)
], Property.prototype, "usersClient", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UsersClient_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Property.prototype, "usersClientId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientsProyects_1.default),
    __metadata("design:type", ClientsProyects_1.default)
], Property.prototype, "ClientsProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientsProyects_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Property.prototype, "clientsProyectsId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PropertyServices_1.default),
    __metadata("design:type", Array)
], Property.prototype, "PropertyServices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ReadingConsumption_1.default),
    __metadata("design:type", Array)
], Property.prototype, "ReadingConsumption", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Bills_1.default),
    __metadata("design:type", Array)
], Property.prototype, "Bills", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => InvoicePayment_1.default),
    __metadata("design:type", Array)
], Property.prototype, "InvoicePayment", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Property.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Property.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Property.prototype, "deleteAt", void 0);
Property = __decorate([
    (0, sequelize_typescript_1.Table)({
        indexes: [
            { fields: ['code'], unique: true }
        ]
    })
], Property);
exports.default = Property;
//# sourceMappingURL=Property.js.map