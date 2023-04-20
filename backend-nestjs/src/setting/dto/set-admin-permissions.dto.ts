import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class SetAdminPermissionsDto {
  @ApiProperty({
    example: true,
    description:
      "Pass True if the administrator's presence in the chat is hidden",
  })
  @IsOptional()
  @IsBoolean()
  is_anonymous?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege',
  })
  @IsOptional()
  @IsBoolean()
  can_manage_chat?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can create channel posts, channels only',
  })
  @IsOptional()
  @IsBoolean()
  can_post_messages?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can edit messages of other users and can pin messages, channels only',
  })
  @IsOptional()
  @IsBoolean()
  can_edit_messages?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can delete messages of other users',
  })
  @IsOptional()
  @IsBoolean()
  can_delete_messages?: boolean;

  @ApiProperty({
    example: true,
    description: 'Pass True if the administrator can manage video chats',
  })
  @IsOptional()
  @IsBoolean()
  can_manage_video_chats?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can restrict, ban or unban chat members',
  })
  @IsOptional()
  @IsBoolean()
  can_restrict_members?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)',
  })
  @IsOptional()
  @IsBoolean()
  can_promote_members?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can change chat title, photo and other settings',
  })
  @IsOptional()
  @IsBoolean()
  can_change_info?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can invite new users to the chat',
  })
  @IsOptional()
  @IsBoolean()
  can_invite_users?: boolean;

  @ApiProperty({
    example: true,
    description:
      'Pass True if the administrator can pin messages, supergroups only',
  })
  @IsOptional()
  @IsBoolean()
  can_pin_messages?: boolean;

  @ApiProperty({
    example: false,
    description:
      'Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only',
  })
  @IsOptional()
  @IsBoolean()
  can_manage_topics?: boolean;
}
