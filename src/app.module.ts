import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { MeasureModule } from './measure/measure.module';
import { MongoConfigService } from './services';
import { WeatherApiModule } from './weather-api/weather-api.module';
import { WeatherSchedulerModule } from './weather-scheduler/weather-scheduler.module';

@Module({
  imports: [
    MeasureModule,
    WeatherApiModule,
    WeatherSchedulerModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: MongoConfigService,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
