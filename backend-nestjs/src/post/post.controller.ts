import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UsePipes,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Post as PostModel } from './post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { RequestPostArrayType } from './type/request-post-array.type';
import { GetPostsQueryDto } from './dto/query/get-posts-query.dto';
import { ChangePostDto } from './dto/change-post.dto';
import { MongoIdPipe } from '../pipes/mongo-id.pipe';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 201, type: PostModel })
  @Post()
  async createPost(@Req() req, @Body() dto: CreatePostDto) {
    const bearer = req.headers.authorization;
    const token = bearer.split('Bearer ')[1];
    return this.postService.createPost(dto, token);
  }

  @ApiOperation({ summary: 'Change post' })
  @ApiResponse({ status: 201, type: PostModel })
  @UsePipes(MongoIdPipe)
  @Patch(':id')
  async changePost(
    @Param('id') id: string,
    @Req() req,
    @Body() dto: ChangePostDto,
  ) {
    const bearer = req.headers.authorization;
    const token = bearer.split('Bearer ')[1];
    return this.postService.changePost(id, dto, token);
  }

  @ApiOperation({ summary: 'Get my posts' })
  @ApiResponse({ status: 200, type: RequestPostArrayType })
  @Get()
  async getMyPosts(@Req() req, @Query() query: GetPostsQueryDto) {
    const bearer = req.headers.authorization;
    const token = bearer.split('Bearer ')[1];
    return this.postService.getMyPosts(query, token);
  }

  @ApiOperation({ summary: 'Get post by id' })
  @ApiResponse({ status: 200, type: PostModel })
  @UsePipes(MongoIdPipe)
  @Get(':id')
  async getPost(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }
}
