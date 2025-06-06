import { ChartAreaInteractive } from '@/components/charts/inline-area-chart'
import { SectionCards } from '@/components/section-cards'

export default function DashboardPage() {
	return (
		<div className='flex flex-col w-full gap-4'>
			<SectionCards />
			<ChartAreaInteractive />
		</div>
	)
}
