import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { LogsService } from './logs.service'
import { Prisma } from '@prisma/client'

@Controller('logs')
export class LogsController {
	constructor(private readonly logsService: LogsService) {}

	@Get('email/:id')
	async getEmailLog(@Param('id') id: string) {
		return this.logsService.getEmailLog(id)
	}

	@Get('message/:id')
	async getMessageLog(@Param('id') id: string) {
		return this.logsService.getMessageLog(id)
	}

	@Get('email')
	async getEmailLogs() {
		return this.logsService.getEmailLogs()
	}

	@Get('message')
	async getMessageLogs() {
		return this.logsService.getMessageLogs()
	}

	@Post('email')
	async createEmailLog(@Body() data: Prisma.EmailsLogCreateInput) {
		return this.logsService.createEmailLog(data)
	}

	@Post('message')
	async createMessageLog(@Body() data: Prisma.MessagesLogCreateInput) {
		return this.logsService.createMessageLog(data)
	}
}
