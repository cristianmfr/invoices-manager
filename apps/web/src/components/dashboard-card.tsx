import { Badge } from './ui/badge'
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'

export function DashboardCard({
	title,
	description,
	value,
	icon,
}: {
	title: string
	description: string
	value: string
	icon: React.ReactNode
}) {
	return (
		<Card className='@container/card'>
			<CardHeader>
				<CardDescription>{title}</CardDescription>
				<CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
					{value}
				</CardTitle>
				<CardAction>
					<Badge variant='outline' className='size-8'>
						{icon}
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className='flex-col items-start -mt-4 text-sm'>
				<div className='text-xs text-muted-foreground'>{description}</div>
			</CardFooter>
		</Card>
	)
}
