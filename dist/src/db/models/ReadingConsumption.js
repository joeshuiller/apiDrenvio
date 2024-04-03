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
const Services_1 = __importDefault(require("./Services"));
const Property_1 = __importDefault(require("./Property"));
const UsersClient_1 = __importDefault(require("./UsersClient"));
let ReadingConsumption = class ReadingConsumption extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReadingConsumption.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ReadingConsumption.prototype, "consumption", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], ReadingConsumption.prototype, "readingDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], ReadingConsumption.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Property_1.default),
    __metadata("design:type", Property_1.default)
], ReadingConsumption.prototype, "Property", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Property_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReadingConsumption.prototype, "propertyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Services_1.default),
    __metadata("design:type", Services_1.default)
], ReadingConsumption.prototype, "Services", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Services_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReadingConsumption.prototype, "servicesId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => UsersClient_1.default),
    __metadata("design:type", UsersClient_1.default)
], ReadingConsumption.prototype, "usersClient", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UsersClient_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReadingConsumption.prototype, "usersClientId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientsProyects_1.default),
    __metadata("design:type", ClientsProyects_1.default)
], ReadingConsumption.prototype, "ClientsProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientsProyects_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReadingConsumption.prototype, "clientsProyectsId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ReadingConsumption.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ReadingConsumption.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ReadingConsumption.prototype, "deleteAt", void 0);
ReadingConsumption = __decorate([
    sequelize_typescript_1.Table
], ReadingConsumption);
exports.default = ReadingConsumption;
//# sourceMappingURL=ReadingConsumption.js.map