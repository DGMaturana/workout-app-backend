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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Historial = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const usuario_1 = require("./usuario");
const sesion_1 = require("./sesion");
let Historial = class Historial {
};
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Historial.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => usuario_1.Usuario }),
    __metadata("design:type", Object)
], Historial.prototype, "idUsuario", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => sesion_1.Sesion }),
    __metadata("design:type", Array)
], Historial.prototype, "sesiones", void 0);
Historial = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
    })
], Historial);
exports.Historial = Historial;
const HistorialModel = (0, typegoose_1.getModelForClass)(Historial);
exports.default = HistorialModel;
