import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TronDocument = Tron & Document;

@Schema()
export class Tron {
  @Prop({
    required: true,
    type: { phrase: String, path: String, locale: String },
  })
  mnemonic: {
    phrase: string;
    path: string;
    locale: string;
  };
  @Prop({ required: true })
  privateKey: string;

  @Prop({ required: true })
  publicKey: string;

  @Prop({ required: true })
  address: string;
}
export const TronSchema = SchemaFactory.createForClass(Tron);
