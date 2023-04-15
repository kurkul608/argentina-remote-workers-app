import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { Transform } from 'class-transformer';
import { toDate } from '../../commoon/helpers/query.helper';

export class CreatePostDto {
  @ApiProperty({
    example: 'Name of post',
    description: 'Name of post',
    required: true,
  })
  @IsString()
  title: boolean;

  @ApiProperty({
    example: ['53f....'],
    description: 'Array of chats/channels ids',
    required: true,
  })
  @IsArray()
  chats: [Types.ObjectId];

  @ApiProperty({
    example: ['53f....'],
    description: 'Array of messages ids',
    required: true,
  })
  @IsArray()
  messages: [Types.ObjectId];

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