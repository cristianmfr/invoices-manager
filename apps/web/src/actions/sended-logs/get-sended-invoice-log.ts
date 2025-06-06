import { EmailsLogs } from '@/types/sended-logs'
import { MessagesLogs } from '@/types/sended-logs'

export async function getSendedInvoiceLog(id: string): Promise<EmailsLogs> {
	const response = await fetch(`/api/logs/email/${id}`)
	return response.json()
}

export async function getSendedMessageLog(id: string): Promise<MessagesLogs> {
	const response = await fetch(`/api/logs/message/${id}`)
	return response.json()
}
