import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { MessageTypeEnum } from '../constants/message-type.enum';
import { ButtonTypeEnum } from '../constants/button-type.enum';

export class CreateMessageDto {
  @ApiProperty({
    example: MessageTypeEnum.text,
    description: 'Button type',
    required: true,
    enum: MessageTypeEnum,
    examples: MessageTypeEnum,
    type: String,
  })
  @IsString()
  @IsEnum(MessageTypeEnum)
  readonly type: string;

  @ApiProperty({
    example: true,
    description: 'Is preview link',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  preview_links?: boolean;

  @ApiProperty({
    example: true,
    description: 'Is enable comment',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  enable_comments?: boolean;

  @ApiProperty({
    example: true,
    description: 'Is notifications',
    required: true,
  })
  @IsBoolean()
  notifications: boolean;

  @ApiProperty({
    example: ['Text', 'some text', 'and some text...'],
    description: 'Message text',
    required: false,
  })
  @IsOptional()
  @IsArray()
  quill_delta?: string[];

  @ApiProperty({
    example: [
      {
        type: ButtonTypeEnum.link,
        link: [{ text: 'link text', url: 'https://google.com' }],
        hidden_text_buttons: [
          {
            button_text: 'button text',
            member_text: 'Text for members',
            not_member_text: 'text for not members',
          },
        ],
      },
    ],
    description: 'Message text',
    required: false,
  })
  @IsOptional()
  @IsArray()
  keyboard?: [];
}
