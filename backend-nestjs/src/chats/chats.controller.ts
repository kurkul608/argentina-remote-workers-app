import { Controller, Get, Param, Query } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateChatDto } from './create-chat.dto';
import { PaymentType } from '../payment/dto/create-payment.dto';

@Controller('chats')
@ApiTags('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @ApiOperation({ summary: 'Return full chats list' })
  @ApiResponse({ status: 200, type: [CreateChatDto] })
  @Get()
  getAll() {
    return this.chatsService.getAll();
  }
  @ApiOperation({ summary: 'Return chat information' })
  @ApiResponse({ status: 200, type: Object })
  @ApiQuery({
    example: PaymentType.donation,
    name: 'paymentType',
    required: false,
    enum: PaymentType,
  })
  @Get(':id')
  getChatInfo(
    @Param('id') id: number,
    @Query('paymentType') paymentType: PaymentType,
  ) {
    return this.chatsService.getChatInfo(id, paymentType);
  }
}
