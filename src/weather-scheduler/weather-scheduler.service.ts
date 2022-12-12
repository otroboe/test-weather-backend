import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';

import { MeasureService } from '../measure/measure.service';
import { WeatherApiService } from '../weather-api/weather-api.service';

@Injectable()
export class WeatherSchedulerService {
  private lat: number;
  private long: number;

  constructor(
    private readonly apiService: WeatherApiService,
    private readonly measureService: MeasureService,
    configService: ConfigService,
  ) {
    this.lat = configService.get<number>('LAT') || 0;
    this.long = configService.get<number>('LONG') || 0;
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async weatherJob() {
    const { feelsLike, temperature, weatherCode } =
      await this.apiService.fetchObservation(this.lat, this.long);

    await this.measureService.create(this.lat, this.long, {
      feelsLike,
      temperature,
      weatherCode: weatherCode?.value ?? '',
    });
  }
}
