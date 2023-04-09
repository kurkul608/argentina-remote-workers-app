import {
  CacheInterceptor,
  CacheModule,
  MiddlewareConsumer,
  Module,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsModule } from './chats/chats.module';
import { MessageModule } from './message/message.module';
import { BotModule } from './bot/bot.module';
import { PaymentModule } from './payment/payment.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisClientModule } from './redis-client/redis-client.module';
import { TronCoreModule } from './tron-core/tron-core.module';
import { TronModule } from './tron/tron.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb_container:27017`,
    ),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS,
        port: +process.env.REDIS_PORT,
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
    PaymentModule,
    RedisClientModule,
    TronCoreModule,
    TronModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
