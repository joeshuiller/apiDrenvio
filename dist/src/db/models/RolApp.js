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
const ClientsProyects_1 = __importDefault(require("./ClientsProyects"));
let RolApp = class RolApp extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RolApp.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], RolApp.prototype, "nameRol", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], RolApp.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientsProyects_1.default),
    __metadata("design:type", ClientsProyects_1.default)
], RolApp.prototype, "ClientsProyects", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientsProyects_1.default),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RolApp.prototype, "clientsProyectsId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => UsersClient_1.default),
    __metadata("design:type", Array)
], RolApp.prototype, "UsersClient", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], RolApp.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], RolApp.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], RolApp.prototype, "deleteAt", void 0);
RolApp = __decorate([
    sequelize_typescript_1.Table
], RolApp);
exports.default = RolApp;
//# sourceMappingURL=RolApp.js.map