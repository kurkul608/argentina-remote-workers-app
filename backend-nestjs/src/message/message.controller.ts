import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SendMessageDto } from './send-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation({ summary: 'Send message to manychats' })
  @ApiResponse({ status: 200 })
  @Post('/')
  async sendMessages(@Body() dto: SendMessageDto) {
    await this.messageService.sendMessages(dto);
    return true;
  }
}
