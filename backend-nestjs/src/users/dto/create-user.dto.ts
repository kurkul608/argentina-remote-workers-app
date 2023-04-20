import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 1,
    description: 'user ID',
    required: true,
  })
  readonly id: number;

  @ApiProperty({
    example: 'John Doe',
    description: 'user name',
    required: true,
  })
  readonly first_name: string;

  @ApiProperty({
    example: 'johndoe2020',
    description: 'user username',
    required: false,
  })
  readonly username?: string;

  @ApiProperty({
    example: 'en',
    description: 'user language',
    required: true,
  })
  readonly language_code: string;
}
