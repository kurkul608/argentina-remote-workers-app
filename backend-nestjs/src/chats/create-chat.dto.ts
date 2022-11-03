import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty({
    example: -100,
    description: 'chat ID',
    required: true,
  })
  readonly id: number;
  @ApiProperty({
    example: 'Very interesting chat',
    description: 'chat name',
    required: true,
  })
  readonly title: string;

  @ApiProperty({
    example: 'supergroup',
    description: 'chat type',
    required: true,
  })
  readonly type: string;
}
