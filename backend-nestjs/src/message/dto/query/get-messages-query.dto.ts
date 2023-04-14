import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { toNumber } from '../../../commoon/helpers/query.helper';

export class GetMessagesQueryDto {
  @ApiProperty({
    example: 5,
    description: 'limit',
    required: true,
  })
  @Transform(({ value }) => toNumber(value, { default: 5, min: 1, max: 15 }))
  @IsNumber()
  readonly limit: number;

  @ApiProperty({
    example: 0,
    description: 'offset',
    required: true,
  })
  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  readonly offset: number;
}
