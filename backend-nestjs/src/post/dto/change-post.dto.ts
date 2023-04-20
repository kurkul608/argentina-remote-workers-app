import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';
import { Transform } from 'class-transformer';
import {
  toBoolean,
  toDate,
  toNumber,
} from '../../commoon/helpers/query.helper';

export class ChangePostDto {
  @ApiProperty({
    example: 'Name of post',
    description: 'Name of post',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: boolean;

  @ApiProperty({
    example: ['53f....'],
    description: 'Array of chats/channels ids',
    required: false,
  })
  @IsOptional()
  @IsArray()
  chats?: [Types.ObjectId];

  @ApiProperty({
    example: ['53f....'],
    description: 'Array of messages ids',
    required: false,
  })
  @IsOptional()
  @IsArray()
  messages?: [Types.ObjectId];

  @ApiProperty({
    example: true,
    description: 'Pin post, or not',
    required: true,
  })
  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  @IsOptional()
  pin_message?: boolean;

  @ApiProperty({
    example: '2023-04-12T00:17:49.801Z',
    description: 'Schedule date',
    required: false,
  })
  @Transform(({ value }) => toDate(value))
  @IsOptional()
  @IsDate()
  scheduleAt?: Date;
}
