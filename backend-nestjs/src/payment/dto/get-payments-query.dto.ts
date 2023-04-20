import { ApiProperty } from '@nestjs/swagger';
import { PaymentType } from './create-payment.dto';

export class GetPaymentsQueryDto {
  @ApiProperty({
    enum: PaymentType,
    required: false,
  })
  readonly paymentType: PaymentType;

  @ApiProperty({
    example: -1,
    description: 'Chat id',
    required: false,
  })
  readonly chatId: number;
}
