import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './payment.schema';
import { ChatsModule } from '../chats/chats.module';
import { TronModule } from '../tron/tron.module';
import { Mode } from '../utils/constants/mode';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    ChatsModule,
    TronModule.forRoot({ mode: (process.env.MODE as Mode) || Mode.develop }),
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
  exports: [PaymentService],
})
export class PaymentModule {}
