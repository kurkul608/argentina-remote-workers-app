import { Document, now, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.schema';
import { Message } from '../message/message.schema';
import { Chat } from '../chats/chats.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @ApiProperty()
  @Prop({ type: String, required: true })
  title: string;

  @ApiProperty()
  @Prop({ type: Number, required: false })
  tg_deleted_errors_count?: number;

  @ApiProperty()
  @Prop({ required: false })
  tg_deleted_errors: [any];

  @ApiProperty()
  @Prop({ type: Boolean, required: true, default: false })
  tg_deleted: boolean;

  @ApiProperty()
  @Prop({ required: true, type: [Types.ObjectId], ref: Chat.name })
  chats: [Types.ObjectId];

  @ApiProperty()
  @Prop({ required: true, type: [Types.ObjectId], ref: Message.name })
  messages: [Types.ObjectId];

  @ApiProperty()
  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  owner: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Date, required: false })
  scheduleAt: Date;

  @ApiProperty()
  @Prop({ type: Date, default: now() })
  createdAt: Date;

  @ApiProperty()
  @Prop({ type: Date, default: now() })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
