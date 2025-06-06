import { api } from '@/lib/api-client'

type CreateTodoItemRequest = {
	month: number
	year: number
}

type CreateTodoItemResponse = void

export async function sendInvoicesMessages({
	month,
	year,
}: CreateTodoItemRequest): Promise<CreateTodoItemResponse> {
	await api.post(`/api/invoices/send-messages`, {
		json: {
			month,
			year,
		},
	})
}
