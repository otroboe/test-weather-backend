import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MeasureDocument = HydratedDocument<Measure>;

@Schema({
  timeseries: {
    granularity: 'minute',
    metaField: 'metadata',
    timeField: 'createdAt',
  },
})
export class Measure {
  @Prop({ type: Date })
  createdAt: Date;

  @Prop()
  lat: number;

  @Prop()
  long: number;

  @Prop(
    raw({
      feelsLike: { type: Number },
      temperature: { type: Number },
      weatherCode: { type: String },
    }),
  )
  metadata: Record<string, any>;
}

export const MeasureSchema = SchemaFactory.createForClass(Measure);

MeasureSchema.index({ lat: 1, long: 1 });
