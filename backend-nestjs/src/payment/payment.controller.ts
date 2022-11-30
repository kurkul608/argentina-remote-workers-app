import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './payment.schema';
import { GetPaymentsQueryDto } from './dto/get-payments-query.dto';

@Controller('payment')
@ApiTags('payment')
export class PaymentController {
  constructor(private readonly paymentMethodService: PaymentService) {}

  @ApiOperation({ summary: 'Get payments by chat id and payment type' })
  @ApiResponse({ status: 200, type: [Payment] })
  @Get('')
  getPayments(@Query() query: GetPaymentsQueryDto) {
    const { paymentType, chatId } = query;
    if (chatId && paymentType) {
      return this.paymentMethodService.getPaymentsByTypeAndChat(
        chatId,
        paymentType,
      );
    } else {
      return this.paymentMethodService.getAllPayments();
    }
  }

  @ApiOperation({ summary: 'Create payment method' })
  @ApiResponse({ status: 201, type: Payment })
  @Post('')
  createPaymentMethod(@Body() dto: CreatePaymentDto) {
    return this.paymentMethodService.createPayment(dto);
  }

  @ApiOperation({ summary: 'Get balance by wallet' })
  @ApiResponse({ status: 200, type: Number })
  @Get(':wallet')
  getWalletBalance(@Param('wallet') wallet: string) {
    return this.paymentMethodService.walletBalance(wallet);
  }
}
