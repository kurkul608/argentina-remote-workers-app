import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UsePipes,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Message } from './message.schema';
import { CreateMessageDto } from './dto/create-message.dto';
import { RequestMessageArrayType } from './type/request-message-array.type';
import { GetMessagesQueryDto } from './dto/query/get-messages-query.dto';
import { MongoIdPipe } from '../pipes/mongo-id.pipe';
import { ChangeMessageDto } from './dto/change-message.dto';

@Controller('message')
@ApiTags('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation({ summary: 'Create message method' })
  @ApiResponse({ status: 201, type: Message })
  @Post()
  async createMessage(@Req() req, @Body() dto: CreateMessageDto) {
    const bearer = req.headers.authorization;
    const token = bearer.split('Bearer ')[1];
    return this.messageService.createMessage(dto, token);
  }

  @ApiOperation({ summary: 'Get my messages' })
  @ApiResponse({ status: 200, type: RequestMessageArrayType })
  @Get('/my')
  async getMyMessages(@Req() req, @Query() query: GetMessagesQueryDto) {
    const bearer = req.headers.authorization;
    const token = bearer.split('Bearer ')[1];
    return this.messageService.getMyMessages(query, token);
  }

  @ApiOperation({ summary: 'Get message' })
  @ApiResponse({ status: 200, type: Message })
  @UsePipes(MongoIdPipe)
  @Get(':id"')
  async getMessage(@Param('id') id: string) {
    return this.messageService.getMessage(id);
  }

  @ApiOperation({ summary: 'Update message' })
  @ApiResponse({ status: 201, type: Message })
  @UsePipes(MongoIdPipe)
  @Patch(':id"')
  async updateMessage(
    @Param('id') id: string,
    @Req() req,
    @Body() dto: ChangeMessageDto,
  ) {
    const bearer = req.headers.authorization;
    const token = bearer.split('Bearer ')[1];
    return this.messageService.changeMessage(id, dto, token);
  }
}
