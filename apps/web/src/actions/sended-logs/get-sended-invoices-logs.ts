import { api } from '@/lib/api-client'
import { EmailsLogs, MessagesLogs } from '@/types/sended-logs'

export async function getSendedEmailsLogs() {
	const result = await api.get(`logs/email`).json<EmailsLogs[]>()

	return result
}

export async function getSendedMessagesLogs() {
	const result = await api.get(`logs/message`).json<MessagesLogs[]>()

	return result
}
