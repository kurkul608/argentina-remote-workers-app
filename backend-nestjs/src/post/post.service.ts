import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { Post, PostDocument } from './post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { ChangePostDto } from './dto/change-post.dto';
import { GetPostsQueryDto } from './dto/query/get-posts-query.dto';
import { omit } from 'lodash';
import { MessageService } from '../message/message.service';
import { ChatsService } from '../chats/chats.service';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @Inject(forwardRef(() => MessageService))
    private readonly messageService: MessageService,
    @Inject(forwardRef(() => ChatsService))
    private readonly chatsService: ChatsService,
  ) {}

  async createPost(dto: CreatePostDto, token: string) {
    const { _id } = await this.authService.getUserInfo(token);

    const post = await this.postModel.create({
      ...omit(dto, 'post_now'),
      owner: _id,
      chats: dto.chats.map((id) => new Types.ObjectId(id)),
      messages: dto.messages.map((id) => new Types.ObjectId(id)),
    });
    if (dto.post_now) {
      const chats = await this.chatsService.getChatsByIds(dto.chats);
      for (const chat of chats) {
        await this.messageService.sendManyMessages(
          dto.messages,
          chat.id,
          dto.pin_message,
        );
      }
      // await this.
    }
    return this.postModel.findById(post.id);
  }

  async changePost(id: string, dto: ChangePostDto, token: string) {
    const { _id } = await this.authService.getUserInfo(token);

    const post = await this.postModel.findById(id);

    if (!post) {
      throw new HttpException(
        'Document (Post) not found',
        HttpStatus.NOT_FOUND,
      );
    }

    if (String(post.owner) !== String(_id)) {
      throw new HttpException(
        'You are not the post creator',
        HttpStatus.FORBIDDEN,
      );
    }

    await post.updateOne({
      ...dto,
      chats: dto.chats?.map((id) => new Types.ObjectId(id)) ?? post.chats,
      messages:
        dto.messages?.map((id) => new Types.ObjectId(id)) ?? post.messages,
    });

    return this.postModel.findById(id);
  }

  async getPostById(id: string) {
    const post = await this.postModel
      .findById(id)
      .populate('messages chats')
      .exec();

    if (!post) {
      throw new HttpException(
        'Document (Post) not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return post;
  }

  async getMyPosts(query: GetPostsQueryDto, token: string) {
    const { _id } = await this.authService.getUserInfo(token);

    const filter = {};
    filter['owner'] = _id;

    const posts = await this.postModel
      .find({ ...filter })
      .limit(query.limit)
      .skip(query.offset)
      .exec();
    const total = await this.postModel.countDocuments({ ...filter }).exec();

    return {
      data: posts,
      total,
    };
  }
}
