'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useInvoiceParams } from '@/hooks/use-invoice-params'
import { Invoice } from '@/types/invoice'
import { ColumnDef, Row } from '@tanstack/react-table'
import { format } from 'date-fns'
import { CheckIcon, EyeIcon, MoreVerticalIcon, SendIcon } from 'lucide-react'

export const ActionsCell = ({ row }: { row: Row<Invoice> }) => {
	const { setParams } = useInvoiceParams()

	return (
		<div className='flex items-center justify-end'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' size='sm'>
						<MoreVerticalIcon className='size-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem
						onClick={() => setParams({ invoiceId: row.original.id.toString() })}
					>
						<EyeIcon className='size-4' />
						Visualizar
					</DropdownMenuItem>
					<DropdownMenuItem>
						<SendIcon className='size-4' />
						Enviar
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export const columns: ColumnDef<Invoice>[] = [
	{
		header: 'ID',
		accessorKey: 'id',
		cell: ({ row }) => (
			<div className='text-sm font-medium'>{row.original.id}</div>
		),
	},
	{
		header: 'Description',
		accessorKey: 'description',
	},
	{
		header: 'Due Date',
		accessorKey: 'dueDate',
		cell: ({ row }) => (
			<div className='text-sm font-medium'>
				{format(row.original.dueDate, 'dd/MM/yyyy')}
			</div>
		),
	},
	{
		header: 'Status',
		accessorKey: 'status',
		cell: () => (
			<Badge variant='outline' className='capitalize'>
				<CheckIcon className='size-4' />
				Enviado
			</Badge>
		),
	},
	{
		id: 'actions',
		cell: ({ row }) => <ActionsCell row={row} />,
	},
]
