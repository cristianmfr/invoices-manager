import {
	BreadcrumbItem,
	Content,
	Header,
	Layout,
	Title,
} from '@/components/templates/page-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sended Logs',
}

export const breadcrumb: BreadcrumbItem[] = [
	{
		label: 'Dashboard',
		url: '/',
	},
	{
		label: 'Sended Logs',
		url: '/sended-logs',
	},
]

export default function SendedLogsTemplate({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Layout>
			<Header breadcrumbs={breadcrumb}>
				<Title>Sended Logs</Title>
			</Header>
			<Content>{children}</Content>
		</Layout>
	)
}
