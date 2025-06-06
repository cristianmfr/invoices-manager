'use client'

import { Button } from '@/components/ui/button'
import { useInvoiceParams } from '@/hooks/use-invoice-params'
import { SendIcon } from 'lucide-react'

export function SendButton() {
	const { setParams } = useInvoiceParams()

	return (
		<Button onClick={() => setParams({ sendInvoice: true })}>
			<SendIcon className='size-4' />
			Send Invoices
		</Button>
	)
}
