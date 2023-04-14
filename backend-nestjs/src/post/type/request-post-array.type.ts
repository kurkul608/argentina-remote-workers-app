import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { Post } from '../post.schema';

class IPost extends Post {
  _id: Types.ObjectId;
}
export class RequestPostArrayType {
  @ApiProperty({
    type: [IPost],
  })
  readonly data: IPost[];

  @ApiProperty({ type: Number })
  readonly total: number;
}
