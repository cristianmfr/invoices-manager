import { Badge } from '@/components/ui/badge'
import { EmailsLogs } from '@/types/sended-logs'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { CheckIcon, XIcon } from 'lucide-react'

export const columns: ColumnDef<EmailsLogs>[] = [
	{
		header: 'ID',
		accessorKey: 'id',
		cell: ({ row }) => (
			<div className='text-sm font-medium'>{row.original.id}</div>
		),
	},
	{
		header: 'Status',
		accessorKey: 'status',
		cell: ({ row }) => (
			<Badge variant='outline' className='capitalize'>
				{row.original.status === 'success' ? (
					<CheckIcon className='size-4' />
				) : (
					<XIcon className='size-4' />
				)}
				{row.original.status}
			</Badge>
		),
	},
	{
		header: 'Message',
		accessorKey: 'message',
	},
	{
		header: 'Created At',
		accessorKey: 'createdAt',
		cell: ({ row }) => (
			<div className='text-sm font-medium'>
				{format(row.original.createdAt, 'dd/MM/yyyy')}
			</div>
		),
	},
]
