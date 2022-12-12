import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherApiService {
  private readonly logger = new Logger(WeatherApiService.name);
  private baseUrl: string;

  constructor(configService: ConfigService) {
    this.baseUrl =
      configService.get<string>('WEATHER_API_URL') ?? 'Missing_WEATHER_API_URL';
  }

  fetchObservation(lat: number, lng: number) {
    this.logger.debug(`Fetch observation data for: ${lat} ${lng} `);
  }

  fetchShortTerm(lat: number, lng: number) {
    this.logger.debug(`Fetch short term data for: ${lat} ${lng} `);
  }
}
