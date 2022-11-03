import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentMethodService } from './payment-method.service';
import { CreatePaymentMethodDto } from './create-payment-method.dto';
import { Payment } from './payment-method.schema';

@Controller('payment-method')
@ApiTags('payment method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}
  @ApiOperation({ summary: 'Return full chats list' })
  @ApiResponse({ status: 201, type: Payment })
  @Post('/')
  createPaymentMethod(@Body() dto: CreatePaymentMethodDto) {
    console.log(dto);
    return this.paymentMethodService.createPaymentMethod(dto);
  }
}
