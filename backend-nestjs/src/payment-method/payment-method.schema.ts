import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  network: string;

  @Prop()
  privateKey: string;

  @Prop()
  publicKey: string;

  @Prop({ required: true, type: { base58: String, hex: String || undefined } })
  address: {
    base58: string;
    hex: string | undefined;
  };
  @Prop({ required: true })
  type: string;

  @Prop({ type: [Types.ObjectId], ref: 'Chat' })
  chats: [Types.ObjectId];
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
