import { AlertCircle, FileText, Mail, MessageCircle } from 'lucide-react'

import { DashboardCard } from './dashboard-card'

export function SectionCards() {
	return (
		<div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs grid-cols-4'>
			<DashboardCard
				title='Invoices'
				description='Total invoices'
				value='100'
				icon={<FileText />}
			/>
			<DashboardCard
				title='Total Emails Sent'
				description='Total emails sent'
				value='100'
				icon={<Mail />}
			/>
			<DashboardCard
				title='Total Messages Sent'
				description='Total messages sent'
				value='100'
				icon={<MessageCircle />}
			/>
			<DashboardCard
				title='Total Errors'
				description='Total errors'
				value='100'
				icon={<AlertCircle />}
			/>
		</div>
	)
}
