'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { RefreshCcw } from 'lucide-react'

interface InvoicesFilterProps {
	month: number
	year: number
	onMonthChange: (month: number) => void
	onYearChange: (year: number) => void
	onSearch: () => void
}

export const InvoicesFilter = ({
	month,
	year,
	onMonthChange,
	onYearChange,
	onSearch,
}: InvoicesFilterProps) => {
	return (
		<div className='flex gap-2 items-center'>
			<Label>Período:</Label>
			<Select
				onValueChange={(value) => onMonthChange(Number(value))}
				value={month.toString()}
			>
				<SelectTrigger>
					<SelectValue placeholder='Selecione o mês' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='1'>Janeiro</SelectItem>
					<SelectItem value='2'>Fevereiro</SelectItem>
					<SelectItem value='3'>Março</SelectItem>
					<SelectItem value='4'>Abril</SelectItem>
					<SelectItem value='5'>Maio</SelectItem>
					<SelectItem value='6'>Junho</SelectItem>
					<SelectItem value='7'>Julho</SelectItem>
					<SelectItem value='8'>Agosto</SelectItem>
					<SelectItem value='9'>Setembro</SelectItem>
					<SelectItem value='10'>Outubro</SelectItem>
					<SelectItem value='11'>Novembro</SelectItem>
					<SelectItem value='12'>Dezembro</SelectItem>
				</SelectContent>
			</Select>
			<Select
				onValueChange={(value) => onYearChange(Number(value))}
				value={year.toString()}
			>
				<SelectTrigger>
					<SelectValue placeholder='Selecione o ano' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='2020'>2020</SelectItem>
					<SelectItem value='2021'>2021</SelectItem>
					<SelectItem value='2022'>2022</SelectItem>
					<SelectItem value='2023'>2023</SelectItem>
					<SelectItem value='2024'>2024</SelectItem>
					<SelectItem value='2025'>2025</SelectItem>
					<SelectItem value='2026'>2026</SelectItem>
					<SelectItem value='2027'>2027</SelectItem>
				</SelectContent>
			</Select>
			<Button variant='outline' onClick={onSearch}>
				<RefreshCcw />
			</Button>
		</div>
	)
}
