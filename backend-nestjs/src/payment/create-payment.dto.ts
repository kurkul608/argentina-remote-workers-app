import { ApiProperty } from '@nestjs/swagger';
export enum PaymentType {
  targeted = 'TARGETED',
  donation = 'DONATION',
}

export class CreatePaymentDto {
  @ApiProperty({
    example: 'Main  donation  account',
    description: 'name of payment method',
    required: true,
  })
  title: string;

  @ApiProperty({
    example: 'TRC20',
    description: 'network',
    required: true,
  })
  network: string;

  @ApiProperty({
    example: 'private key',
    description: 'private key',
    required: false,
  })
  privateKey: string;

  @ApiProperty({
    example: 'public key',
    description: 'public key',
    required: false,
  })
  publicKey: string;

  @ApiProperty({
    example: 'public key',
    description: `${PaymentType.donation} |${PaymentType.targeted}`,
    required: true,
    enum: PaymentType,
  })
  type: PaymentType;

  @ApiProperty({
    example: [1, 11],
    description: 'chats id',
    required: true,
  })
  chats: number[];

  @ApiProperty({
    example: {
      base58: 'trc..',
    },
    description: 'address info',
    required: true,
  })
  address: {
    base58: string;
    hex?: string;
  };
}
