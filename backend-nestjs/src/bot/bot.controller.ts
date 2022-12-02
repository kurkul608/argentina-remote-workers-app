import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Payment } from '../payment/payment.schema';
import { BotService } from './bot.service';

@Controller('bot')
@ApiTags('bot')
export class BotController {
  constructor(private readonly botService: BotService) {}
  @ApiOperation({ summary: 'Method return bot name' })
  @ApiResponse({ status: 200, type: String })
  @Get()
  getBotName() {
    return this.botService.getBotName();
  }
}
