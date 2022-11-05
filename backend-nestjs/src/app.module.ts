import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsModule } from './chats/chats.module';
import { MessageModule } from './message/message.module';
import { BotModule } from './bot/bot.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CacheModule.register(),
    ChatsModule,
    MessageModule,
    BotModule,
    PaymentMethodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
