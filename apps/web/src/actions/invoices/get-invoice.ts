import { Invoice } from '@/types/invoice'

export async function getInvoice(id: string): Promise<Invoice> {
	const response = await fetch(`/api/invoices/${id}`)

	if (!response.ok) {
		throw new Error('Failed to fetch invoice')
	}

	return response.json()
}
