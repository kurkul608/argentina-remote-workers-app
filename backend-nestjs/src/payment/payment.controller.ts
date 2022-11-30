import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @ApiOperation({ summary: 'Get balance by wallet' })
  @ApiResponse({ status: 201, type: Number })
  @Get(':wallet')
  getWalletBalance(@Param('wallet') wallet: string) {
    return this.paymentMethodService.walletBalance(wallet);
  }
}
