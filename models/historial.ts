import {
  getModelForClass,
  prop,
  modelOptions,
  Ref,
} from "@typegoose/typegoose";
import { Usuario } from "./usuario";
import { Sesion } from "./sesion";
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Historial {
  @prop()
  id?: string;

  @prop({ ref: () => Usuario })
  idUsuario?: Ref<Usuario>;

  @prop({ ref: () => Sesion })
  sesiones?: Ref<Sesion>[];
}

const HistorialModel = getModelForClass(Historial);
export default HistorialModel;
