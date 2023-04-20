import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: false })
  username: string;

  @Prop({ required: false })
  language_code: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
