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
    example: PaymentType.donation,
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
}
