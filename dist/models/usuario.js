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
exports.Usuario = void 0;
const typegoose_1 = require("@typegoose/typegoose");
let Usuario = class Usuario {
};
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => String, required: true }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => String, required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: true, type: Boolean }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "estado", void 0);
__decorate([
    (0, typegoose_1.prop)({
        type: () => String,
        required: true,
        minlength: 6,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
Usuario = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            toJSON: {
                transform: (doc, ret) => {
                    delete ret.__v;
                    ret.id = ret._id;
                    delete ret._id;
                },
            },
            toObject: {
                transform: (doc, ret) => {
                    delete ret.__v;
                    ret.id = ret._id;
                    delete ret._id;
                },
            },
        },
    })
], Usuario);
exports.Usuario = Usuario;
const UsuarioModel = (0, typegoose_1.getModelForClass)(Usuario);
exports.default = UsuarioModel;
// const user = UsuarioModel.create({});
// interface IUsuario {
//   nombre: string;
//   email: string;
//   password: string;
// }
// interface UsuarioModelInterface extends Model<UsuarioDoc> {
//   build(attr: IUsuario): UsuarioDoc;
// }
// interface UsuarioDoc extends Document {
//   nombre: string;
//   email: string;
//   password: string;
// }
// const UsuarioSchema = new Schema({
//   nombre: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });
// // UsuarioModel.build({
// // })
// const UsuarioModel = model<UsuarioDoc, UsuarioModelInterface>(
//   "Usuario",
//   UsuarioSchema
// );
// export { UsuarioModel };
