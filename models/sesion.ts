import { Serie } from "./serie";
import { DocumentType } from "@typegoose/typegoose";
import { Ejercicio } from "./ejercicio";
import {
  getModelForClass,
  prop,
  modelOptions,
  Ref,
} from "@typegoose/typegoose";
@modelOptions({
  schemaOptions: {
    timestamps: true,
    toObject: {
      transform: (doc: DocumentType<Sesion>, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
})
export class Sesion {
  @prop()
  id?: string;

  @prop({ default: 0 })
  duracion?: number;

  @prop({ ref: () => Ejercicio })
  ejercicios?: Ref<Ejercicio>[];

  @prop({ default: false })
  terminada?: boolean;
}

const SesionModel = getModelForClass(Sesion);
export default SesionModel;
