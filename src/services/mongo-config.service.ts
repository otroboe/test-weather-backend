import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
  private uri: string;

  constructor(configService: ConfigService) {
    this.uri = configService.get<string>('MONGO_URI') || '';
  }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.uri,
    };
  }
}
