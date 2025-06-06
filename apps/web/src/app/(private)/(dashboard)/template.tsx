import {
	Content,
	Header,
	Layout,
	Title,
} from '@/components/templates/page-template'

export default function DashboardTemplate({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Layout>
			<Header>
				<Title>Dashboard</Title>
			</Header>
			<Content>{children}</Content>
		</Layout>
	)
}
