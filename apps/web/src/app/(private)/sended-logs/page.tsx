import {
	getSendedEmailsLogs,
	getSendedMessagesLogs,
} from '@/actions/sended-logs/get-sended-invoices-logs'
import { SendedLogsTabs } from '@/components/sended-logs-tabs'

export default async function SendedLogsPage() {
	const emailsLogs = await getSendedEmailsLogs()
	const messagesLogs = await getSendedMessagesLogs()

	return <SendedLogsTabs emailsLogs={emailsLogs} messagesLogs={messagesLogs} />
}
