import { Injectable } from '@nestjs/common';
import {
  RedisService,
  DEFAULT_REDIS_NAMESPACE,
} from '@liaoliaots/nestjs-redis';
import * as Redis from 'ioredis';

@Injectable()
export class RedisClientService {
  private service: Redis.Redis;

  constructor(private readonly redisService: RedisService) {
    this.service = this.redisService.getClient(DEFAULT_REDIS_NAMESPACE);
  }

  async getData(key) {
    const data = await this.service.get(key);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }

  async setData(key, value) {
    return this.service.set(key, JSON.stringify(value));
  }

  async delData(key) {
    return this.service.del(key);
  }

  async lrange(key: string, start: number, stop: number) {
    return this.service.lrange(key, start, stop);
  }

  async rpush(key: string, data: any) {
    return this.service.rpush(key, JSON.stringify(data));
  }

  async lrem(key: string, count: number, data: any) {
    return this.service.lrem(key, count, JSON.stringify(data));
  }
}
