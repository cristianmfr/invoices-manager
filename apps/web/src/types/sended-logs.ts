export type SendStatus = 'success' | 'error'

export type EmailsLogs = {
	id: string
	status: SendStatus
	message: string
	error?: string
	createdAt: Date
	updatedAt: Date
}

export type MessagesLogs = {
	id: string
	status: SendStatus
	message: string
	error?: string
	createdAt: Date
	updatedAt: Date
}
