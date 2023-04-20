import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import tt from 'typegram';
import { ApiProperty } from '@nestjs/swagger';

export type ChatDocument = Chat & Document;

interface ITgChatInfo {
  chat_info: tt.ChatFromGetChat;
  chat_members_count: number;
  photos: {
    small?: string;
    big?: string;
  };
}

@Schema()
export class TgChatInfo extends Document {
  @ApiProperty()
  @Prop({ type: Object, required: true })
  chat_info: tt.ChatFromGetChat;

  @ApiProperty()
  @Prop({ type: Number, required: true })
  chat_members_count: number;

  @ApiProperty()
  @Prop({ type: { small: String, big: String }, required: true })
  photos: any;
}

export const TgChatInfoSchema = SchemaFactory.createForClass(TgChatInfo);
@Schema()
export class Chat {
  @ApiProperty()
  @Prop({ type: TgChatInfoSchema, ref: TgChatInfo.name })
  tg_chat_info: ITgChatInfo;

  @ApiProperty()
  @Prop({ required: true, type: Boolean })
  is_hidden: boolean;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
