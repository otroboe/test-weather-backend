import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherApiModule } from './weather-api/weather-api.module';

@Module({
  imports: [ConfigModule.forRoot(), WeatherApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
