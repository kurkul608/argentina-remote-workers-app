import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const appConfig = () => ({ secret: process.env.JWT_SECRET_KEY });

export const jwtConstants: JwtModuleAsyncOptions = {
  useFactory: () => ({
    secret: appConfig().secret,
    signOptions: { expiresIn: '1d' },
  }),
};
