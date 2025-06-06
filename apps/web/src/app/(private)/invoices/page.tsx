import { getInvoicesByPeriod } from '@/actions/invoices/get-invoices-by-period'
import { SendInvoicesEmailsDialog } from '@/components/dialogs/send-invoices-emails-dialog'
import { InvoicesTable } from '@/components/tables/invoices/data-table'

export default async function InvoicesPage() {
	const invoices = await getInvoicesByPeriod(6, 2025)

	return (
		<>
			<InvoicesTable invoices={invoices} />
			<SendInvoicesEmailsDialog />
		</>
	)
}
