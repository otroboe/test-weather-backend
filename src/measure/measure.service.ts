import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Measure, MeasureDocument } from './measure.schema';

@Injectable()
export class MeasureService {
  constructor(
    @InjectModel(Measure.name) private measureModel: Model<MeasureDocument>,
  ) {}

  async create(lat: number, long: number, metadata: Record<string, any>) {
    const createdMeasure = new this.measureModel({
      createdAt: new Date(),
      lat,
      long,
      metadata,
    });

    await createdMeasure.save();
  }
}
