import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { InvoicesService } from './invoice.service'
import { Invoice } from '../../repository/invoice.entity'

@Controller('invoices')
export class InvoicesController {
	constructor(private readonly invoiceService: InvoicesService) {}

	@Get(':id')
	async findById(@Param('id') id: number) {
		return await this.invoiceService.findById(id)
	}

	@Get()
	async findAll(): Promise<Invoice[]> {
		return this.invoiceService.findAll()
	}

	@Get('month/:month/year/:year')
	async findByPeriod(
		@Param('month') month: number,
		@Param('year') year: number,
	) {
		return this.invoiceService.findByPeriod(month, year)
	}

	@Post('send-messages')
	async sendMessages(@Body() body: { month: number; year: number }) {
		return this.invoiceService.sendInvoicesByPeriod(body.month, body.year)
	}

	@Post('send-emails')
	async sendEmails(@Body() body: { month: number; year: number }) {
		return this.invoiceService.sendEmailsByPeriod(body.month, body.year)
	}
}
