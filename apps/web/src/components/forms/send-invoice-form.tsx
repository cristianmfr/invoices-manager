'use client'

import { sendInvoicesEmails } from '@/actions/invoices/send-invoices-emails'
import { sendInvoicesMessages } from '@/actions/invoices/send-invoices-messages'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { SelectField } from '../select-field'

export const sendInvoiceFormSchema = z.object({
	month: z.number(),
	year: z.number(),
	type: z.enum(['email', 'message']),
})

type SendInvoiceFormProps = z.infer<typeof sendInvoiceFormSchema>

export function SendInvoiceForm() {
	const { control, handleSubmit } = useForm<SendInvoiceFormProps>({
		resolver: zodResolver(sendInvoiceFormSchema),
	})

	const onSubmit = (data: SendInvoiceFormProps) => {
		if (data.type === 'email') {
			sendInvoicesEmails({ month: data.month, year: data.year })
		} else {
			sendInvoicesMessages({ month: data.month, year: data.year })
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			<div className='flex items-center gap-2'>
				<SelectField
					name='month'
					label='Month'
					control={control}
					options={[
						{
							value: '1',
							label: 'January',
						},
						{
							value: '2',
							label: 'February',
						},
						{
							value: '3',
							label: 'March',
						},
						{
							value: '4',
							label: 'April',
						},
						{
							value: '5',
							label: 'May',
						},
						{
							value: '6',
							label: 'June',
						},
						{
							value: '7',
							label: 'July',
						},
						{
							value: '8',
							label: 'August',
						},
						{
							value: '9',
							label: 'September',
						},
						{
							value: '10',
							label: 'October',
						},
						{
							value: '11',
							label: 'November',
						},
						{
							value: '12',
							label: 'December',
						},
					]}
					placeholder='Select a month'
				/>
				<SelectField
					name='year'
					label='Year'
					control={control}
					options={[
						{
							value: '2023',
							label: '2023',
						},
						{
							value: '2024',
							label: '2024',
						},
						{
							value: '2025',
							label: '2025',
						},
						{
							value: '2026',
							label: '2026',
						},
					]}
					placeholder='Select a year'
				/>
				<SelectField
					name='type'
					label='Type'
					control={control}
					options={[
						{
							value: 'email',
							label: 'Email',
						},
						{
							value: 'message',
							label: 'Message',
						},
					]}
					placeholder='Select a type'
				/>
			</div>
			<Button type='submit'>Send Invoice</Button>
		</form>
	)
}
