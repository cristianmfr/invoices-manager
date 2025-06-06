'use client'

import { InvoicesFilter } from '@/components/invoices-filter'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Invoice } from '@/types/invoice'
import {
	type ColumnFiltersState,
	type SortingState,
	type VisibilityState,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react'
import * as React from 'react'
import { useState } from 'react'

import { columns } from './columns'
import { InvoicesRow } from './row'
import { InvoicesSkeleton } from './skeleton'

export function InvoicesTable({ invoices }: { invoices: Invoice[] }) {
	const [month, setMonth] = useState(6)
	const [year, setYear] = useState(new Date().getFullYear())

	const [rowSelection, setRowSelection] = React.useState({})
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({})
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	)
	const [sorting, setSorting] = React.useState<SortingState>([])
	const [pagination, setPagination] = React.useState({
		pageIndex: 0,
		pageSize: 10,
	})

	const table = useReactTable({
		data: invoices ?? [],
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
			pagination,
		},
		getRowId: (row) => row.id.toString(),
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	})

	return (
		<div className='flex flex-col gap-4'>
			<InvoicesFilter
				month={month}
				year={year}
				onMonthChange={setMonth}
				onYearChange={setYear}
				onSearch={() => {}}
			/>
			{invoices.length === 0 ? (
				<InvoicesSkeleton />
			) : (
				<Tabs
					defaultValue='outline'
					className='w-full flex-col justify-start gap-6'
				>
					<TabsContent
						value='outline'
						className='relative flex flex-col gap-4 overflow-auto'
					>
						<div className='overflow-hidden rounded-lg border'>
							<Table>
								<TableHeader className='bg-muted sticky top-0 z-10'>
									{table.getHeaderGroups().map((headerGroup) => (
										<TableRow key={headerGroup.id}>
											{headerGroup.headers.map((header) => {
												return (
													<TableHead
														key={header.id}
														colSpan={header.colSpan}
														className={cn(header.id === 'id' && 'w-10 pl-5')}
													>
														{header.isPlaceholder
															? null
															: flexRender(
																	header.column.columnDef.header,
																	header.getContext(),
																)}
													</TableHead>
												)
											})}
										</TableRow>
									))}
								</TableHeader>
								<TableBody className='**:data-[slot=table-cell]:first:w-8'>
									{table.getRowModel().rows?.length ? (
										table
											.getRowModel()
											.rows.map((row) => <InvoicesRow key={row.id} row={row} />)
									) : (
										<TableRow>
											<TableCell
												colSpan={columns.length}
												className='h-24 text-center'
											>
												Nenhum resultado.
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</div>
						<div className='flex items-center justify-between px-4'>
							<div className='text-muted-foreground hidden flex-1 text-sm lg:flex'>
								{table.getFilteredSelectedRowModel().rows.length} de{' '}
								{table.getFilteredRowModel().rows.length} selecionadas.
							</div>
							<div className='flex w-full items-center gap-8 lg:w-fit'>
								<div className='hidden items-center gap-2 lg:flex'>
									<Label
										htmlFor='rows-per-page'
										className='text-sm font-medium'
									>
										Linhas por página
									</Label>
									<Select
										value={`${table.getState().pagination.pageSize}`}
										onValueChange={(value) => {
											table.setPageSize(Number(value))
										}}
									>
										<SelectTrigger
											size='sm'
											className='w-20'
											id='rows-per-page'
										>
											<SelectValue
												placeholder={table.getState().pagination.pageSize}
											/>
										</SelectTrigger>
										<SelectContent side='top'>
											{[10, 20, 30, 40, 50].map((pageSize) => (
												<SelectItem key={pageSize} value={`${pageSize}`}>
													{pageSize}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div className='flex w-fit items-center justify-center text-sm font-medium'>
									Página {table.getState().pagination.pageIndex + 1} de{' '}
									{table.getPageCount()}
								</div>
								<div className='ml-auto flex items-center gap-2 lg:ml-0'>
									<Button
										variant='outline'
										className='hidden h-8 w-8 p-0 lg:flex'
										onClick={() => table.setPageIndex(0)}
										disabled={!table.getCanPreviousPage()}
									>
										<span className='sr-only'>Ir para a primeira página</span>
										<ChevronsLeft />
									</Button>
									<Button
										variant='outline'
										className='size-8'
										size='icon'
										onClick={() => table.previousPage()}
										disabled={!table.getCanPreviousPage()}
									>
										<span className='sr-only'>Ir para a página anterior</span>
										<ChevronLeft />
									</Button>
									<Button
										variant='outline'
										className='size-8'
										size='icon'
										onClick={() => table.nextPage()}
										disabled={!table.getCanNextPage()}
									>
										<span className='sr-only'>Ir para a próxima página</span>
										<ChevronRight />
									</Button>
									<Button
										variant='outline'
										className='hidden size-8 lg:flex'
										size='icon'
										onClick={() => table.setPageIndex(table.getPageCount() - 1)}
										disabled={!table.getCanNextPage()}
									>
										<span className='sr-only'>Ir para a última página</span>
										<ChevronsRight />
									</Button>
								</div>
							</div>
						</div>
					</TabsContent>
					<TabsContent
						value='past-performance'
						className='flex flex-col px-4 lg:px-6'
					>
						<div className='aspect-video w-full flex-1 rounded-lg border border-dashed'></div>
					</TabsContent>
					<TabsContent
						value='key-personnel'
						className='flex flex-col px-4 lg:px-6'
					>
						<div className='aspect-video w-full flex-1 rounded-lg border border-dashed'></div>
					</TabsContent>
					<TabsContent
						value='focus-documents'
						className='flex flex-col px-4 lg:px-6'
					>
						<div className='aspect-video w-full flex-1 rounded-lg border border-dashed'></div>
					</TabsContent>
				</Tabs>
			)}
		</div>
	)
}
