import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from '../pipes/mongo-id.pipe';
import { SetAdminPermissionsDto } from './dto/set-admin-permissions.dto';
import { Public } from '../auth/public-route.decorator';
import { SetRestrictPermissionsDto } from './dto/set-restrict-permissions.dto';

@Controller('setting')
@ApiTags('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @ApiResponse({ status: 200, type: Object })
  @ApiOperation({ summary: 'Return chat Admins' })
  @UsePipes(MongoIdPipe)
  @Get(':id/admin')
  async getAdmins(@Param('id') id: string) {
    return this.settingService.getChatAdmins(id);
  }

  @Public()
  @ApiResponse({ status: 201, type: Object })
  @ApiOperation({ summary: 'Promote user to Admin' })
  @UsePipes(MongoIdPipe)
  @Post(':chatId/admin/promote/:id')
  async promoteToAdmin(
    @Param('chatId') chatId: string,
    @Query('id') id: number,
    @Body() dto: SetAdminPermissionsDto,
  ) {
    return this.settingService.promoteUser(dto, chatId, id);
  }

  @Public()
  @ApiResponse({ status: 201, type: Object })
  @ApiOperation({ summary: 'Restrict Admin to user' })
  @UsePipes(MongoIdPipe)
  @Post(':chatId/admin/restrict/:id')
  async restrictAdmin(
    @Param('chatId') chatId: string,
    @Query('id') id: number,
    @Body() dto: SetRestrictPermissionsDto,
  ) {
    return await this.settingService.restrictAdmin(dto, chatId, id);
  }
}
