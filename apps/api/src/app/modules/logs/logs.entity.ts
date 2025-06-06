import { SendStatus } from '@prisma/client'

export class EmailsLogsEntity {
	id: string
	status: SendStatus
	message: string
	error?: string
	createdAt: Date
	updatedAt: Date
}

export class MessagesLogsEntity {
	id: string
	status: SendStatus
	message: string
	error?: string
	createdAt: Date
	updatedAt: Date
}
