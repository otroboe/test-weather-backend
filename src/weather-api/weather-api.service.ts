import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherApiService {
  private readonly logger = new Logger(WeatherApiService.name);
  private baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    configService: ConfigService,
  ) {
    this.baseUrl =
      configService.get<string>('WEATHER_API_URL') ?? 'Missing_WEATHER_API_URL';
  }

  private async baseFetch<T>(url: string): Promise<T> {
    const { data } = await firstValueFrom(
      this.httpService.get<T>(url).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response?.data);
          throw `An error happened when fetching at ${url}`;
        }),
      ),
    );

    return data;
  }

  async fetchObservation(
    lat: number,
    long: number,
  ): Promise<Record<string, any>> {
    // this.logger.debug(`Fetch observation data for: ${lat} ${long} `);
    const url = `${this.baseUrl}/observation?lat=${lat}&long=${long}`;

    return await this.baseFetch<Record<string, any>>(url);
  }

  async fetchShortTerm(
    lat: number,
    long: number,
  ): Promise<Record<string, any>[]> {
    // this.logger.debug(`Fetch short term data for: ${lat} ${long} `);
    const url = `${this.baseUrl}/shortterm?lat=${lat}&long=${long}`;

    const { shortterm } = await this.baseFetch<Record<string, any>>(url);
    return shortterm;
  }
}
