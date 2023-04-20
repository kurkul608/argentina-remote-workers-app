import { CacheKey, CacheTTL, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('some-key')
  @CacheTTL(10)
  async test() {
    return this.appService.test();
  }
}
