'use client'

import { useInvoiceParams } from '@/hooks/use-invoice-params'

import { SendInvoiceForm } from '../forms/send-invoice-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'

export function SendInvoicesEmailsDialog() {
	const { sendInvoice, setParams } = useInvoiceParams()

	const isOpen = Boolean(sendInvoice)

	return (
		<Dialog
			open={isOpen}
			onOpenChange={() => setParams({ sendInvoice: false })}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Send Invoices Emails</DialogTitle>
				</DialogHeader>
				<SendInvoiceForm />
			</DialogContent>
		</Dialog>
	)
}
