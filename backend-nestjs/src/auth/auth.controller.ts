import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  @ApiOperation({ summary: 'Method for check token is working' })
  @ApiResponse({ status: 200 })
  @Post('/check')
  tokenChecker() {
    return true;
  }
}
