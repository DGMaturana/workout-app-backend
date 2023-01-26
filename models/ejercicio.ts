import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";
import { Serie } from "./serie";
@modelOptions({
  schemaOptions: {},
})
export class Ejercicio {
  @prop()
  nombre?: string;

  @prop({ type: () => [Serie] })
  series?: Serie[];
}

const EjercicioModel = getModelForClass(Ejercicio);
export default EjercicioModel;
