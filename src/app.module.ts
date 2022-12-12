import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { MongoConfigService } from './services';
import { WeatherApiModule } from './weather-api/weather-api.module';
import { WeatherSchedulerModule } from './weather-scheduler/weather-scheduler.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: MongoConfigService,
    }),
    WeatherApiModule,
    WeatherSchedulerModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
