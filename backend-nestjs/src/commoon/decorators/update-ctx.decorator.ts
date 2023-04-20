import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TelegrafExecutionContext } from 'nestjs-telegraf';

export const UpdateCtx = createParamDecorator((_, ctx: ExecutionContext) =>
  TelegrafExecutionContext.create(ctx).getContext(),
);
