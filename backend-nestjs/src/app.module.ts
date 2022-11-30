import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsModule } from './chats/chats.module';
import { MessageModule } from './message/message.module';
import { BotModule } from './bot/bot.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisClientModule } from './redis-client/redis-client.module';
import { TronModule } from './tron/tron.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
      },
    }),
    CacheModule.register(),
    // CacheModule.register({
    //   store: redisStore,
    //   host: 'localhost',
    //   port: 6379,
    //   ttl: 2000,
    //   isGlobal: true,
    // }),
    ChatsModule,
    MessageModule,
    BotModule,
    PaymentMethodModule,
    RedisClientModule,
    TronModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
