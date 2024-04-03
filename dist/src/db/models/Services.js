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
const PropertyServices_1 = __importDefault(require("./PropertyServices"));
const ReadingConsumption_1 = __importDefault(require("./ReadingConsumption"));
const UsersClient_1 = __importDefault(require("./UsersClient"));
const FixedCharge_1 = __importDefault(require("./FixedCharge"));
let Services = class Services extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Services.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Services.prototype, "code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Services.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Services.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => UsersClient_1.default),
    __metadata("design:type", UsersClient_1.default)
], Services.prototype, "usersClient", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UsersClient_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Services.prototype, "usersClientId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientsProyects_1.default),
    __metadata("design:type", ClientsProyects_1.default)
], Services.prototype, "ClientsProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientsProyects_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Services.prototype, "clientsProyectsId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PropertyServices_1.default),
    __metadata("design:type", Array)
], Services.prototype, "PropertyServices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ReadingConsumption_1.default),
    __metadata("design:type", Array)
], Services.prototype, "ReadingConsumption", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => FixedCharge_1.default),
    __metadata("design:type", Array)
], Services.prototype, "FixedCharge", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Services.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Services.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Services.prototype, "deleteAt", void 0);
Services = __decorate([
    (0, sequelize_typescript_1.Table)({
        indexes: [
            { fields: ['code'], unique: true }
        ]
    })
], Services);
exports.default = Services;
//# sourceMappingURL=Services.js.map