import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/lib/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class LogsService {
	constructor(private readonly prisma: PrismaService) {}

	async createEmailLog(data: Prisma.EmailsLogCreateInput) {
		return this.prisma.emailsLog.create({ data })
	}

	async createMessageLog(data: Prisma.MessagesLogCreateInput) {
		return this.prisma.messagesLog.create({ data })
	}

	async getEmailLog(id: string) {
		return this.prisma.emailsLog.findUnique({ where: { id } })
	}

	async getMessageLog(id: string) {
		return this.prisma.messagesLog.findUnique({ where: { id } })
	}

	async getEmailLogs() {
		return this.prisma.emailsLog.findMany()
	}

	async getMessageLogs() {
		return this.prisma.messagesLog.findMany()
	}
}
