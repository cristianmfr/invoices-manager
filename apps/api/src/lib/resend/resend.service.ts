import { Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import { env } from '../env/env.config'

interface SendEmailDto {
	to: string
	subject: string
	html: string
	from?: string
}

interface BatchEmailDto {
	emails: Array<{
		to: string
		subject: string
		html: string
		from?: string
	}>
}

@Injectable()
export class ResendService {
	private readonly resend: Resend
	private readonly defaultFrom: string

	constructor() {
		const apiKey = env.RESEND_API_KEY
		this.defaultFrom = env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

		if (!apiKey) {
			throw new Error('RESEND_API_KEY must be defined in environment variables')
		}

		this.resend = new Resend(apiKey)
	}

	async sendEmail({
		to,
		subject,
		html,
		from = this.defaultFrom,
	}: SendEmailDto): Promise<any> {
		try {
			const response = await this.resend.emails.send({
				from,
				to,
				subject,
				html,
			})

			return response
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Failed to send email: ${error.message}`)
			}
			throw error
		}
	}

	async sendBatchEmails({ emails }: BatchEmailDto): Promise<any[]> {
		try {
			const results = await Promise.all(
				emails.map(async (email, index) => {
					// Add a small delay between emails (100ms) to avoid rate limiting
					await new Promise((resolve) => setTimeout(resolve, index * 100))
					return this.sendEmail({
						to: email.to,
						subject: email.subject,
						html: email.html,
						from: email.from || this.defaultFrom,
					})
				}),
			)

			return results
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Failed to send batch emails: ${error.message}`)
			}
			throw error
		}
	}
}
