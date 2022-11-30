import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './create-payment.dto';
import { Payment } from './payment.schema';

@Controller('payment')
@ApiTags('payment')
export class PaymentController {
  constructor(private readonly paymentMethodService: PaymentService) {}
  @ApiOperation({ summary: 'Create payment method' })
  @ApiResponse({ status: 201, type: Payment })
  @Post('/')
  createPaymentMethod(@Body() dto: CreatePaymentDto) {
    return this.paymentMethodService.createPaymentMethod(dto);
  }

  @ApiOperation({ summary: 'TronWeb test' })
  @ApiResponse({ status: 201, type: Payment })
  @Get('/')
  tronWebTest() {
    return this.paymentMethodService.tronWebTest();
  }
}
