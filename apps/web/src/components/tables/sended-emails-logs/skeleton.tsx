import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export function SendedEmailsLogsSkeleton() {
	return (
		<Table>
			<TableBody>
				{Array.from({ length: 25 }).map((_, index) => (
					<TableRow key={index.toString()} className='h-[45px]'>
						<TableCell>
							<Skeleton className='h-4 w-24' />
						</TableCell>
						<TableCell>
							<Skeleton className='h-4 w-32' />
						</TableCell>
						<TableCell>
							<Skeleton className='h-4 w-20' />
						</TableCell>
						<TableCell>
							<Skeleton className='h-4 w-24' />
						</TableCell>
						<TableCell>
							<Skeleton className='h-4 w-16' />
						</TableCell>
						<TableCell>
							<Skeleton className='h-4 w-8' />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
