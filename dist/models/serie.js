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
exports.Serie = void 0;
const typegoose_1 = require("@typegoose/typegoose");
let Serie = class Serie {
};
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Serie.prototype, "repeticiones", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => Number }),
    __metadata("design:type", Number)
], Serie.prototype, "peso", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], Serie.prototype, "finalizada", void 0);
Serie = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            _id: false,
            id: false,
        },
    })
], Serie);
exports.Serie = Serie;
const SerieModel = (0, typegoose_1.getModelForClass)(Serie);
exports.default = SerieModel;
