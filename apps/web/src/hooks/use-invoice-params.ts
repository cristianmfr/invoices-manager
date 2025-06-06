import { useQueryStates } from 'nuqs'
import { parseAsBoolean, parseAsString } from 'nuqs/server'

export const useInvoiceParams = () => {
	const [params, setParams] = useQueryStates({
		invoiceId: parseAsString,
		sendInvoice: parseAsBoolean,
	})

	return {
		...params,
		setParams,
	}
}
