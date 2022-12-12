import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';

import { WeatherApiService } from '../weather-api/weather-api.service';

@Injectable()
export class WeatherSchedulerService {
  private lat: number;
  private long: number;

  constructor(
    private readonly apiService: WeatherApiService,
    configService: ConfigService,
  ) {
    this.lat = configService.get<number>('LAT') || 0;
    this.long = configService.get<number>('LONG') || 0;
  }

  @Cron(CronExpression.EVERY_MINUTE)
  // @Cron(CronExpression.EVERY_10_SECONDS)
  async weatherJob() {
    const [observation, shortTerm] = await Promise.all([
      this.apiService.fetchObservation(this.lat, this.long),
      this.apiService.fetchShortTerm(this.lat, this.long),
    ]);

    console.log({ observation, shortTerm });
  }
}
