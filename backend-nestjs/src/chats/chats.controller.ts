import { Controller, Get, Param } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateChatDto } from './create-chat.dto';

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
  @Get(':id')
  getChatInfo(@Param('id') id: number) {
    return this.chatsService.getChatInfo(id);
  }
}
