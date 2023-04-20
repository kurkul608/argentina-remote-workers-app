import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BotService } from './bot.service';
import { Public } from '../auth/public-route.decorator';

@Controller('bot')
@ApiTags('bot')
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Public()
  @ApiOperation({ summary: 'Method return bot name' })
  @ApiResponse({ status: 200, type: String })
  @Get()
  getBotName() {
    return this.botService.getBotName();
  }
}
