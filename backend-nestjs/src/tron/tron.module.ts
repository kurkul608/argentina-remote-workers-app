import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { CreateTronWebFactory } from './utils/create-tron-web-factory';
import { DiscoveryModule } from '@nestjs/core';
import { TronModuleOptions } from './interfaces/tron-module-options';

@Global()
@Module({
  imports: [DiscoveryModule],
})
export class TronModule {
  public static forRoot(options: TronModuleOptions): DynamicModule {
    const tronWebProvider: Provider = {
      provide: 'TRON_WEB',
      useFactory: async () => {
        const tronWeb = await CreateTronWebFactory(options.mode);
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
