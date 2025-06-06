import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { InputField } from '../input-field'
import { Button } from '../ui/button'

export const recoveryFormSchema = z.object({
	email: z.string().email(),
})

export type RecoveryFormData = z.infer<typeof recoveryFormSchema>

export function RecoveryForm() {
	const { register, handleSubmit } = useForm<RecoveryFormData>({
		resolver: zodResolver(recoveryFormSchema),
	})

	const onSubmit = (data: RecoveryFormData) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid gap-2 w-full'>
			<InputField name='email' label='Email' register={register('email')} />
			<Button type='submit'>Send recovery email</Button>
		</form>
	)
}
