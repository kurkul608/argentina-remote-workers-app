import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { BotModule } from '../bot/bot.module';

@Module({
  imports: [BotModule],
  providers: [SettingService],
  controllers: [SettingController],
})
export class SettingModule {}
