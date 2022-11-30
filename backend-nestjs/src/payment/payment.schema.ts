import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Tron } from '../tron/tron.schema';
import { Chat } from '../chats/chats.schema';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  network: string;

  @Prop({ required: true })
  type: string;

  @Prop({ type: [Types.ObjectId], ref: Chat.name })
  chats: [Types.ObjectId];

  @Prop({ type: [Types.ObjectId], ref: Tron.name })
  address: Types.ObjectId;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
