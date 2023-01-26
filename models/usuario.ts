import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";
import { DocumentType } from "@typegoose/typegoose";
@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      transform: (doc: DocumentType<Usuario>, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
      },
    },
    toObject: {
      transform: (doc: DocumentType<Usuario>, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
})
export class Usuario {
  @prop()
  id?: string;

  @prop({ type: () => String, required: true })
  nombre?: string;

  @prop({ type: () => String, required: true, unique: true, trim: true })
  email?: string;

  @prop({ default: true, type: Boolean })
  estado?: boolean;
  @prop({
    type: () => String,
    required: true,
    minlength: 6,
  })
  password?: string;
}

const UsuarioModel = getModelForClass(Usuario);
export default UsuarioModel;

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
