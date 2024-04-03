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
const Property_1 = __importDefault(require("./Property"));
const InvoicePayment_1 = __importDefault(require("./InvoicePayment"));
const NoveltyInvoice_1 = __importDefault(require("./NoveltyInvoice"));
const UsersClient_1 = __importDefault(require("./UsersClient"));
const BilledPeriods_1 = __importDefault(require("./BilledPeriods"));
const Periods_1 = __importDefault(require("./Periods"));
let Bills = class Bills extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bills.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], Bills.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "usersCreate", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Periods_1.default),
    __metadata("design:type", Periods_1.default)
], Bills.prototype, "Periods", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Periods_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "periodsId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => BilledPeriods_1.default),
    __metadata("design:type", BilledPeriods_1.default)
], Bills.prototype, "BilledPeriods", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => BilledPeriods_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "billedPeriodsId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Property_1.default),
    __metadata("design:type", Property_1.default)
], Bills.prototype, "Property", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Property_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "propertyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => UsersClient_1.default),
    __metadata("design:type", UsersClient_1.default)
], Bills.prototype, "usersClient", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UsersClient_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "usersClientId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientsProyects_1.default),
    __metadata("design:type", ClientsProyects_1.default)
], Bills.prototype, "ClientsProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientsProyects_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bills.prototype, "clientsProyectsId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => InvoicePayment_1.default),
    __metadata("design:type", Array)
], Bills.prototype, "InvoicePayment", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => NoveltyInvoice_1.default),
    __metadata("design:type", Array)
], Bills.prototype, "NoveltyInvoice", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Bills.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Bills.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Bills.prototype, "deleteAt", void 0);
Bills = __decorate([
    (0, sequelize_typescript_1.Table)({
        indexes: [
            { fields: ['code'], unique: true }
        ]
    })
], Bills);
exports.default = Bills;
//# sourceMappingURL=Bills.js.map