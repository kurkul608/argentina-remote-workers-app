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
import { toBoolean, toDate } from '../../commoon/helpers/query.helper';

export class CreatePostDto {
  @ApiProperty({
    example: 'Name of post',
    description: 'Name of post',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: ['53f....'],
    description: 'Array of chats/channels ids',
    required: true,
  })
  @IsArray()
  chats: [string];

  @ApiProperty({
    example: ['53f....'],
    description: 'Array of messages ids',
    required: true,
  })
  @IsArray()
  messages: [string];

  @ApiProperty({
    example: true,
    description: 'Make post now, or not',
    required: true,
  })
  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  post_now: boolean;

  @ApiProperty({
    example: true,
    description: 'Pin post, or not',
    required: true,
  })
  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  pin_message: boolean;

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
