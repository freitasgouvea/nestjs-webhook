import { Controller, Post, Body, Logger } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  @Post()
  handleWebhook(@Body() payload: any) {
    const orderId = payload.orderId;
    const correlationId = payload.correlationId;
    const status = payload.status;

    this.logger.log(`Received webhook for order id ${orderId}, correlation id ${correlationId} with status ${status}`);

    return { success: true, message: 'Request received successfully' };
  }
}
