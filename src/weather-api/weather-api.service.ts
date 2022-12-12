import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherApiService {
  private baseUrl: string;

  constructor(configService: ConfigService) {
    this.baseUrl =
      configService.get<string>('WEATHER_API_URL') ?? 'Missing_WEATHER_API_URL';

    console.log('baseUrl', this.baseUrl);
  }
}
