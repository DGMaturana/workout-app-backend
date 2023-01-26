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
exports.Sesion = void 0;
const ejercicio_1 = require("./ejercicio");
const typegoose_1 = require("@typegoose/typegoose");
let Sesion = class Sesion {
};
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Sesion.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], Sesion.prototype, "duracion", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => ejercicio_1.Ejercicio }),
    __metadata("design:type", Array)
], Sesion.prototype, "ejercicios", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Sesion.prototype, "terminada", void 0);
Sesion = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            toObject: {
                transform: (doc, ret) => {
                    delete ret.__v;
                    ret.id = ret._id;
                    delete ret._id;
                },
            },
        },
    })
], Sesion);
exports.Sesion = Sesion;
const SesionModel = (0, typegoose_1.getModelForClass)(Sesion);
exports.default = SesionModel;
