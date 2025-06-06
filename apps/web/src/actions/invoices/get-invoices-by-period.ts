import { api } from '@/lib/api-client'
import { Invoice } from '@/types/invoice'

export async function getInvoicesByPeriod(month: number, year: number) {
	const result = await api
		.get(`invoices/month/${month}/year/${year}`)
		.json<Invoice[]>()

	return result
}
