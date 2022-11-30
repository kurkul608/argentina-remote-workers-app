import { ApiProperty } from '@nestjs/swagger';

export class CreateRandomDto {
  @ApiProperty({
    example: {
      phrase: 'mnemonic phrase',
      path: 'path',
      locale: 'en',
    },
    description: 'mnemonic phrase object',
    required: false,
  })
  readonly mnemonic: {
    phrase: string;
    path: string;
    locale: string;
  };

  @ApiProperty({
    example: 'private key',
    description: 'private key',
    required: false,
  })
  readonly privateKey: string;

  @ApiProperty({
    example: 'public key',
    description: 'public key',
    required: false,
  })
  readonly publicKey: string;

  @ApiProperty({
    example: 'TRX..',
    description: 'address info',
    required: true,
  })
  readonly address: string;
}
