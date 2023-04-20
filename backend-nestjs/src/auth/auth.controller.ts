import { Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './public-route.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'Method for check token is working' })
  @ApiResponse({ status: 200 })
  @Post('/check')
  tokenChecker() {
    return true;
  }
}
