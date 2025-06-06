import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Invoice } from '../../repository/invoice.entity'
import { WhatsAppService } from '../../../lib/whatsapp/whatsapp.service'
import { PrismaService } from '../../../lib/prisma/prisma.service'
import { ResendService } from '../../../lib/resend/resend.service'

@Injectable()
export class InvoicesService {
	constructor(
		@InjectRepository(Invoice)
		private invoiceRepository: Repository<Invoice>,
		private whatsappService: WhatsAppService,
		private prismaService: PrismaService,
		private resendService: ResendService,
	) {}

	async findAll() {
		const thirtyDaysAgo = new Date()
		thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

		const queryBuilder = this.invoiceRepository
			.createQueryBuilder('invoice')
			.leftJoinAndSelect('invoice.company', 'company')
			.leftJoinAndSelect('invoice.associate', 'associate')
			.leftJoinAndSelect('invoice.subcategory', 'subcategory')
			.where('invoice.ftrCadastro = :registration', {
				registration: 'ENTRADA',
			})
			.andWhere('invoice.ftrDataVencimento >= :thirtyDaysAgo', {
				thirtyDaysAgo,
			})
			.andWhere('invoice.ftrSituacao = :status', { status: 'A VENCER' })
			.andWhere('invoice.ftrDataPagamento IS NULL')

		console.log('Generated SQL:', queryBuilder.getSql())
		console.log('Query Parameters:', queryBuilder.getParameters())

		const invoices = await queryBuilder.getMany()

		console.log('Query Result Count:', invoices.length)

		return invoices.map((invoice) => {
			if (invoice.dueDate) {
				const data = new Date(invoice.dueDate)
				if (!isNaN(data.getTime())) {
					invoice.dueDate = new Date(
						`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
					)
				}
			}
			return invoice
		})
	}

	async findByPeriod(month: number, year: number) {
		if (month < 1 || month > 12) {
			throw new Error('Mês inválido. Deve ser entre 1 e 12')
		}

		const startDate = new Date(year, month - 1, 1)
		const endDate = new Date(year, month, 0)

		const queryBuilder = this.invoiceRepository
			.createQueryBuilder('invoice')
			.leftJoinAndSelect('invoice.company', 'company')
			.leftJoinAndSelect('invoice.associate', 'associate')
			.leftJoinAndSelect('invoice.subcategory', 'subcategory')
			.where('invoice.ftrCadastro = :registration', {
				registration: 'ENTRADA',
			})
			.andWhere('invoice.ftrDataVencimento >= :startDate', { startDate })
			.andWhere('invoice.ftrDataVencimento <= :endDate', { endDate })

		const invoices = await queryBuilder.getMany()

		return invoices.map((invoice) => {
			if (invoice.dueDate) {
				const data = new Date(invoice.dueDate)
				if (!isNaN(data.getTime())) {
					invoice.dueDate = new Date(
						`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
					)
				}
			}
			return invoice
		})
	}

	async findById(registroId: number) {
		const queryBuilder = this.invoiceRepository
			.createQueryBuilder('invoice')
			.leftJoinAndSelect('invoice.company', 'company')
			.leftJoinAndSelect('invoice.associate', 'associate')
			.leftJoinAndSelect('invoice.subcategory', 'subcategory')
			.where('invoice.ftrCadastro = :registration', {
				registration: 'ENTRADA',
			})
			.andWhere('invoice.ftrId = :id', { id: registroId })
			.andWhere('subcategory.fscId NOT IN (:...subcategories)', {
				subcategories: [1, 2],
			})

		const invoice = await queryBuilder.getOne()

		if (!invoice) {
			throw new NotFoundException('Fatura não encontrada')
		}

		if (invoice.dueDate) {
			const data = new Date(invoice.dueDate)
			if (!isNaN(data.getTime())) {
				invoice.dueDate = new Date(
					`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
				)
			}
		}

		return invoice
	}

	async sendInvoicesByPeriod(month: number, year: number) {
		if (month < 1 || month > 12) {
			throw new Error('Mês inválido. Deve ser entre 1 e 12')
		}

		const startDate = new Date(year, month - 1, 1)
		const endDate = new Date(year, month, 0)

		const queryBuilder = this.invoiceRepository
			.createQueryBuilder('invoice')
			.leftJoinAndSelect('invoice.company', 'company')
			.leftJoinAndSelect('invoice.associate', 'associate')
			.leftJoinAndSelect('invoice.subcategory', 'subcategory')
			.where('invoice.ftrCadastro = :registration', {
				registration: 'ENTRADA',
			})
			.andWhere('invoice.ftrDataVencimento >= :startDate', { startDate })
			.andWhere('invoice.ftrDataVencimento <= :endDate', { endDate })

		const invoices = await queryBuilder.getMany()

		const messages = invoices.map((invoice) => ({
			phone: invoice.client.cellphone,
			message: `Olá ${invoice.client.name}, a fatura ${invoice.id} está vencendo em ${invoice.dueDate}.`,
		}))

		const sentMessages = await this.whatsappService.sendBatchMessages({
			messages,
		})

		await this.prismaService.messagesLog.createMany({
			data: messages.map((message) => ({
				phone: message.phone,
				message: message.message,
				status: sentMessages.includes(message.phone) ? 'sent' : 'failed',
			})),
		})

		return 'Faturas enviadas com sucesso'
	}

	async sendEmailsByPeriod(month: number, year: number) {
		if (month < 1 || month > 12) {
			throw new Error('Mês inválido. Deve ser entre 1 e 12')
		}

		const startDate = new Date(year, month - 1, 1)
		const endDate = new Date(year, month, 0)

		const queryBuilder = this.invoiceRepository
			.createQueryBuilder('invoice')
			.leftJoinAndSelect('invoice.company', 'company')
			.leftJoinAndSelect('invoice.associate', 'associate')
			.leftJoinAndSelect('invoice.subcategory', 'subcategory')
			.where('invoice.ftrCadastro = :registration', {
				registration: 'ENTRADA',
			})
			.andWhere('invoice.ftrDataVencimento >= :startDate', { startDate })
			.andWhere('invoice.ftrDataVencimento <= :endDate', { endDate })

		const invoices = await queryBuilder.getMany()

		const emails = invoices.map((invoice) => ({
			to: invoice.client.email,
			subject: `Fatura ${invoice.id} vencendo em ${invoice.dueDate}`,
			html: `Olá ${invoice.client.name}, a fatura ${invoice.id} está vencendo em ${invoice.dueDate}.`,
		}))

		const sentEmails = await this.resendService.sendBatchEmails({
			emails,
		})

		await this.prismaService.emailsLog.createMany({
			data: emails.map((email) => ({
				email: email.to,
				subject: email.subject,
				html: email.html,
				status: sentEmails.includes(email.to) ? 'sent' : 'failed',
			})),
		})

		return 'Faturas enviadas com sucesso'
	}
}
