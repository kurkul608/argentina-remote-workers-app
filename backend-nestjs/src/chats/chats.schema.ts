import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: false })
  invite_link: string;

  @Prop({
    required: false,
    type: {
      can_send_messages: Boolean,
      can_send_media_messages: Boolean,
      can_send_polls: Boolean,
      can_send_other_messages: Boolean,
      can_add_web_page_previews: Boolean,
      can_change_info: Boolean,
      can_invite_users: Boolean,
      can_pin_messages: Boolean,
      can_manage_topics: Boolean,
    },
  })
  permissions: string;

  @Prop({ required: false })
  join_to_send_messages: boolean;

  @Prop({ required: true })
  isHidden: boolean;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
