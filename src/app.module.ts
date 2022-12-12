import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { WeatherApiModule } from './weather-api/weather-api.module';
import { WeatherSchedulerModule } from './weather-scheduler/weather-scheduler.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    WeatherApiModule,
    WeatherSchedulerModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
