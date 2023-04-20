import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async test() {
    // await this.cacheManager.set('item', { key: 'test' });
    // const testItem = await this.cacheManager.get('item');
    console.log('test item');
    return 'Hello,  thats test';
  }
}
