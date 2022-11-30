import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { CreateTronWebFactory } from './utils/create-tron-web-factory';
import { DiscoveryModule } from '@nestjs/core';

@Global()
@Module({
  imports: [DiscoveryModule],
  // providers: [],
  // exports: [],
  // controllers: [],
})
export class TronModule {
  public static forRoot(): DynamicModule {
    // const telegrafBotName = getBotToken(options.botName);
    //
    // const telegrafBotNameProvider = {
    //   provide: TELEGRAF_BOT_NAME,
    //   useValue: telegrafBotName,
    // };

    const tronWebProvider: Provider = {
      provide: 'TRON_WEB',
      useFactory: async () => {
        const tronWeb = await CreateTronWebFactory();
        // allBotsMap.set(telegrafBotName, bot);
        return tronWeb;
      },
    };

    return {
      module: TronModule,
      providers: [tronWebProvider],
      exports: [tronWebProvider],
    };
  }
}
