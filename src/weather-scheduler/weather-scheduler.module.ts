import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MeasureModule } from '../measure/measure.module';
import { WeatherApiModule } from '../weather-api/weather-api.module';
import { WeatherSchedulerService } from './weather-scheduler.service';

@Module({
  imports: [ConfigModule, MeasureModule, WeatherApiModule],
  providers: [WeatherSchedulerService],
})
export class WeatherSchedulerModule {}
