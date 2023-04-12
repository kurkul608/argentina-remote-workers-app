import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { MessageTypeEnum } from './constants/message-type.enum';
import { now, Types, Document } from 'mongoose';
import { ButtonTypeEnum } from './constants/button-type.enum';
import { User } from '../users/user.schema';

export type MessageDocument = Message & Document;

export interface ILink {
  text: string;
  url: string;
}

export interface IHiddenTextButton {
  button_text: string;
  member_text: string;
  not_member_text: string;
}
export interface IKeyboard {
  type: ButtonTypeEnum;
  links?: ILink[];
  hidden_text_buttons?: IHiddenTextButton[];
}
@Schema()
export class HiddenTextButton extends Document {
  @ApiProperty()
  @Prop({ required: true, type: String })
  button_text: string;

  @ApiProperty()
  @Prop({ required: true, type: String })
  member_text: string;

  @ApiProperty()
  @Prop({ required: true, type: String })
  not_member_text: string;
}
export const HiddenTextButtonSchema =
  SchemaFactory.createForClass(HiddenTextButton);

@Schema()
export class Link extends Document {
  @ApiProperty()
  @Prop({ required: true, type: String })
  text: string;

  @ApiProperty()
  @Prop({ required: true, type: String })
  url: string;
}
export const LinkSchema = SchemaFactory.createForClass(Link);

@Schema()
export class Keyboard extends Document {
  @ApiProperty()
  @Prop({
    required: true,
    default: ButtonTypeEnum.link,
    type: String,
    enum: ButtonTypeEnum,
  })
  type: ButtonTypeEnum;

  @ApiProperty()
  @Prop({ required: false, type: [LinkSchema], ref: Link.name })
  links?: [ILink];

  @ApiProperty()
  @Prop({
    required: false,
    type: [HiddenTextButtonSchema],
    ref: HiddenTextButton.name,
  })
  hidden_text_buttons?: [ILink];
}

export const KeyboardSchema = SchemaFactory.createForClass(Keyboard);

@Schema()
export class Message {
  @ApiProperty()
  @Prop({
    required: true,
    default: MessageTypeEnum.text,
    type: String,
    enum: MessageTypeEnum,
  })
  type: MessageTypeEnum;

  @ApiProperty()
  @Prop({ type: Boolean, required: false })
  preview_links?: boolean;

  @ApiProperty()
  @Prop({ type: Boolean, required: false })
  enable_comments?: boolean;

  @ApiProperty()
  @Prop({ type: Boolean, required: true })
  notifications: boolean;

  @ApiProperty()
  @Prop({ type: [String], required: false })
  quill_delta?: string[];

  @ApiProperty()
  @Prop({ required: false, type: [KeyboardSchema], ref: Keyboard.name })
  keyboard: [IKeyboard];

  @ApiProperty()
  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  owner: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Date, default: now() })
  createdAt: Date;

  @ApiProperty()
  @Prop({ type: Date, default: now() })
  updatedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
