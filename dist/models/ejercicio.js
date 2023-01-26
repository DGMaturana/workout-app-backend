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
exports.Ejercicio = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const serie_1 = require("./serie");
let Ejercicio = class Ejercicio {
};
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Ejercicio.prototype, "nombre", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [serie_1.Serie] }),
    __metadata("design:type", Array)
], Ejercicio.prototype, "series", void 0);
Ejercicio = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {},
    })
], Ejercicio);
exports.Ejercicio = Ejercicio;
const EjercicioModel = (0, typegoose_1.getModelForClass)(Ejercicio);
exports.default = EjercicioModel;
