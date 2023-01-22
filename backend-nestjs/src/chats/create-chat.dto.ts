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

  @ApiProperty({
    example: 'https://t.me/+4',
    description: 'invite link',
    required: false,
  })
  readonly invite_link: string;

  @ApiProperty({
    example: {
      can_send_messages: true,
      can_send_media_messages: true,
      can_send_polls: true,
      can_send_other_messages: true,
      can_add_web_page_previews: true,
      can_change_info: true,
      can_invite_users: true,
      can_pin_messages: true,
      can_manage_topics: true,
    },
    description: 'permissions',
    required: false,
  })
  readonly permissions: string;

  @ApiProperty({
    example: 'true',
    description: 'invite link',
    required: false,
  })
  readonly join_to_send_messages: boolean;

  @ApiProperty({
    example: 'true',
    description: 'chat visible',
    required: false,
  })
  readonly isHidden: boolean;
}
