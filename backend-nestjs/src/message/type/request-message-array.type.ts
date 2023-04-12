import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { Message } from '../message.schema';

class IMessage extends Message {
  _id: Types.ObjectId;
}
export class RequestMessageArrayType {
  @ApiProperty({
    type: [IMessage],
  })
  readonly data: IMessage[];

  @ApiProperty({ type: Number })
  readonly total: number;
}
