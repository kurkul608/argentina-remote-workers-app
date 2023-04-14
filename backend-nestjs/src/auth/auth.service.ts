import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: number) {
    const user = await this.userService.findById(id);
    if (user) {
      const result = user;
      return result;
    }
    return null;
  }

  async login(user: Omit<CreateUserDto, 'language_code'>) {
    const payload = { username: user.first_name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getUserInfo(token: string) {
    const { sub } = await this.jwtService.decode(token);
    const user = await this.userService.findById(sub);
    return user;
  }
}
