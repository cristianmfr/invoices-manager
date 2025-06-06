import {
	Actions,
	BreadcrumbItem,
	Content,
	Header,
	Layout,
	Title,
} from '@/components/templates/page-template'
import { Metadata } from 'next'

import { SendButton } from './send-button'

export const metadata: Metadata = {
	title: 'Invoices',
}

export const breadcrumb: BreadcrumbItem[] = [
	{
		label: 'Dashboard',
		url: '/',
	},
	{
		label: 'Invoices',
		url: '/invoices',
	},
]

export default function InvoicesTemplate({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Layout>
			<Header breadcrumbs={breadcrumb}>
				<Title>Invoices</Title>
				<Actions>
					<SendButton />
				</Actions>
			</Header>
			<Content>{children}</Content>
		</Layout>
	)
}
