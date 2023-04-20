import { Injectable } from '@nestjs/common';
import { BotService } from '../bot/bot.service';
import { SetAdminPermissionsDto } from './dto/set-admin-permissions.dto';
import { SetRestrictPermissionsDto } from './dto/set-restrict-permissions.dto';

@Injectable()
export class SettingService {
  constructor(private readonly botService: BotService) {}
  async getChatAdmins(id: string) {
    return await this.botService.getChatTGAdmins(id);
  }
  async promoteUser(dto: SetAdminPermissionsDto, chatId: string, id: number) {
    return await this.botService.promoteUserToAdmin(chatId, id, dto);
  }
  async restrictAdmin(
    dto: SetRestrictPermissionsDto,
    chatId: string,
    id: number,
  ) {
    return await this.botService.restrictAdminToUser(chatId, id, dto);
  }
}
