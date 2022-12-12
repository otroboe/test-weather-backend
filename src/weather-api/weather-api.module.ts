import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WeatherApiService } from './weather-api.service';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [WeatherApiService],
  exports: [WeatherApiService],
})
export class WeatherApiModule {}
