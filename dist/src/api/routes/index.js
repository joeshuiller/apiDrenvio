"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import cameraRoute from "./cameraRoute";
const homeRoute_1 = __importDefault(require("./public/homeRoute"));
const routersLink_1 = require("../utils/routersLink");
const UsersClientsRoutes_1 = __importDefault(require("./public/UsersClientsRoutes"));
const TypesClientsRoutes_1 = __importDefault(require("./public/TypesClientsRoutes"));
const RolAppRoute_1 = __importDefault(require("./public/RolAppRoute"));
const ClientsProyectsRoute_1 = __importDefault(require("./public/ClientsProyectsRoute"));
const CustomerDetailsRoute_1 = __importDefault(require("./public/CustomerDetailsRoute"));
const MenusRoutes_1 = __importDefault(require("./private/MenusRoutes"));
const RecordExpensesRoutes_1 = __importDefault(require("./private/RecordExpensesRoutes"));
const ZoneRoutes_1 = __importDefault(require("./private/ZoneRoutes"));
const TypesServicesRoutes_1 = __importDefault(require("./private/TypesServicesRoutes"));
const StatusServicesRoutes_1 = __importDefault(require("./private/StatusServicesRoutes"));
const SocialStratumRoutes_1 = __importDefault(require("./private/SocialStratumRoutes"));
const ServicesRoutes_1 = __importDefault(require("./private/ServicesRoutes"));
const ReadingConsumptionRoutes_1 = __importDefault(require("./private/ReadingConsumptionRoutes"));
const PropertyServicesRoutes_1 = __importDefault(require("./private/PropertyServicesRoutes"));
const PropertyRoutes_1 = __importDefault(require("./private/PropertyRoutes"));
const NoveltyInvoiceRoutes_1 = __importDefault(require("./private/NoveltyInvoiceRoutes"));
const InvoicePaymentRoutes_1 = __importDefault(require("./private/InvoicePaymentRoutes"));
const FixedChargeRoutes_1 = __importDefault(require("./private/FixedChargeRoutes"));
const BillsRoutes_1 = __importDefault(require("./private/BillsRoutes"));
const AssignTechnicianRoutes_1 = __importDefault(require("./private/AssignTechnicianRoutes"));
const PeriodsRoutes_1 = __importDefault(require("./private/PeriodsRoutes"));
const BilledPeriodsRoutes_1 = __importDefault(require("./private/BilledPeriodsRoutes"));
const SelectClickRoute_1 = __importDefault(require("./public/SelectClickRoute"));
class Routes {
    constructor(app) {
        this.url = routersLink_1.routersLink.api + routersLink_1.routersLink.v;
        app.use("/api", homeRoute_1.default);
        app.use(this.url, UsersClientsRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.typesClients, TypesClientsRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.rolApp, RolAppRoute_1.default);
        app.use(this.url + routersLink_1.routersLink.clientsProyects, ClientsProyectsRoute_1.default);
        app.use(this.url + routersLink_1.routersLink.customerDetails, CustomerDetailsRoute_1.default);
        app.use(this.url + routersLink_1.routersLink.menu, MenusRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.recordExpenses, RecordExpensesRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.zone, ZoneRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.typesServices, TypesServicesRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.statusServices, StatusServicesRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.socialStratum, SocialStratumRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.services, ServicesRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.readingConsumption, ReadingConsumptionRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.propertyServices, PropertyServicesRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.noveltyInvoice, NoveltyInvoiceRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.invoicePayment, InvoicePaymentRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.fixedCharge, FixedChargeRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.bills, BillsRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.assignTechnician, AssignTechnicianRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.property, PropertyRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.periods, PeriodsRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.billedPeriods, BilledPeriodsRoutes_1.default);
        app.use(this.url + routersLink_1.routersLink.selectClick, SelectClickRoute_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map