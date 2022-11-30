import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodController } from './payment-method.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './payment-method.schema';
import { ChatsModule } from '../chats/chats.module';
import { TronModule } from '../tron/tron.module';
import { Mode } from '../utils/constants/mode';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    ChatsModule,
    TronModule.forRoot({ mode: (process.env.MODE as Mode) || Mode.develop }),
  ],
  providers: [PaymentMethodService],
  controllers: [PaymentMethodController],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule {}
