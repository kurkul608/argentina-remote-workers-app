import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  @ApiProperty({
    example: [-100, 11],
    description: 'chats ID',
    required: true,
  })
  chat_ids: number[];

  @ApiProperty({
    example: 'someone text',
    description: 'message text',
    required: true,
  })
  message: string;

  @ApiProperty({
    example: true,
    description: 'pin message, or no',
  })
  pin_message: boolean;
}
