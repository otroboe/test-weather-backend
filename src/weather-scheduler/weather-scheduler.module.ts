import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WeatherApiModule } from '../weather-api/weather-api.module';
import { WeatherSchedulerService } from './weather-scheduler.service';

@Module({
  imports: [ConfigModule, WeatherApiModule],
  providers: [WeatherSchedulerService],
})
export class WeatherSchedulerModule {}
