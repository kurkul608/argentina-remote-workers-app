import { Controller, Get, Param } from '@nestjs/common';
import { SettingService } from './setting.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('setting')
@ApiTags('setting')
export class SettingController {
  constructor(private readonly setting: SettingService) {}
  @Get(':chatId')
  @ApiOperation({ summary: 'Return chat Admins' })
  @ApiResponse({ status: 200, type: Object })
  async getAdmins(@Param('chatId') chatId: number) {
    console.log(chatId);
    return this.setting.getChatAdmins(chatId);
  }
}
