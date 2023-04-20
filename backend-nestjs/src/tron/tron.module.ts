import { Module } from '@nestjs/common';
import { TronService } from './tron.service';
import { TronCoreModule } from '../tron-core/tron-core.module';
import { Mode } from '../utils/constants/mode';
import { MongooseModule } from '@nestjs/mongoose';
import { Tron, TronSchema } from './tron.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tron.name, schema: TronSchema }]),
    TronCoreModule.forRoot({
      mode: (process.env.MODE as Mode) || Mode.develop,
    }),
  ],
  providers: [TronService],
  exports: [TronService],
})
export class TronModule {}
