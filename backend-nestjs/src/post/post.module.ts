import { forwardRef, Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { Post, PostSchema } from './post.schema';
import { MessageModule } from '../message/message.module';
import { ChatsModule } from '../chats/chats.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    forwardRef(() => AuthModule),
    forwardRef(() => MessageModule),
    forwardRef(() => ChatsModule),
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
