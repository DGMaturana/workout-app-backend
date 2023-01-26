import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";
@modelOptions({
  schemaOptions: {
    _id: false,
    id: false,
  },
})
export class Serie {
  @prop()
  repeticiones?: number;

  @prop({ type: () => Number })
  peso?: number;

  @prop({ default: false })
  finalizada?: boolean;
}

const SerieModel = getModelForClass(Serie);
export default SerieModel;
