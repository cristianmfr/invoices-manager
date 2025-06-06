import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { env } from '../env/env.config'

interface SendTextMessageDto {
	phone: string
	message: string
}

interface BatchMessageDto {
	messages: Array<{
		phone: string
		message: string
	}>
}

@Injectable()
export class WhatsAppService {
	private readonly baseUrl: string
	private readonly instance: string
	private readonly token: string

	constructor() {
		this.instance = env.ZAPI_INSTANCE
		this.token = env.ZAPI_TOKEN

		if (!this.instance || !this.token) {
			throw new Error(
				'ZAPI_INSTANCE and ZAPI_TOKEN must be defined in environment variables',
			)
		}

		this.baseUrl = `https://api.z-api.io/instances/${this.instance}/token/${this.token}`
	}

	async sendTextMessage({ phone, message }: SendTextMessageDto): Promise<any> {
		try {
			const response = await axios.post(`${this.baseUrl}/send-text`, {
				phone,
				message,
			})

			return response.data
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(
					`Failed to send WhatsApp message: ${error.response?.data?.message || error.message}`,
				)
			}
			throw error
		}
	}

	async sendBatchMessages({ messages }: BatchMessageDto): Promise<any[]> {
		try {
			const results = await Promise.all(
				messages.map(async (msg, index) => {
					await new Promise((resolve) => setTimeout(resolve, index * 100))
					return this.sendTextMessage(msg)
				}),
			)

			return results
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(
					`Failed to send batch WhatsApp messages: ${error.response?.data?.message || error.message}`,
				)
			}
			throw error
		}
	}
}
