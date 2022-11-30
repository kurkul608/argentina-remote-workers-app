import { Module } from '@nestjs/common';
import { TronService } from './tron.service';
import { TronCoreModule } from '../tron-core/tron-core.module';
import { Mode } from '../utils/constants/mode';

@Module({
  imports: [
    TronCoreModule.forRoot({
      mode: (process.env.MODE as Mode) || Mode.develop,
    }),
  ],
  providers: [TronService],
  exports: [TronService],
})
export class TronModule {}
