import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EmailsLogs, MessagesLogs } from '@/types/sended-logs'

import { SendedEmailsLogsTable } from './tables/sended-emails-logs/data-table'
import { SendedMessagesLogsTable } from './tables/sended-messages-logs/data-table'

export function SendedLogsTabs({
	emailsLogs,
	messagesLogs,
}: {
	emailsLogs: EmailsLogs[]
	messagesLogs: MessagesLogs[]
}) {
	return (
		<Tabs defaultValue='emails'>
			<TabsList>
				<TabsTrigger value='emails'>Emails</TabsTrigger>
				<TabsTrigger value='messages'>Messages</TabsTrigger>
			</TabsList>
			<TabsContent value='emails' className='w-full'>
				<SendedEmailsLogsTable emailsLogs={emailsLogs} />
			</TabsContent>
			<TabsContent value='messages' className='w-full'>
				<SendedMessagesLogsTable messagesLogs={messagesLogs} />
			</TabsContent>
		</Tabs>
	)
}
