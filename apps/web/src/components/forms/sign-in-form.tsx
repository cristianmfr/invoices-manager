'use client'

import { signInWithEmailAndPassword } from '@/app/(public)/(auth)/sign-in/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { InputField } from '../input-field'
import { Button } from '../ui/button'

export const signInFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
})

export type SignInFormData = z.infer<typeof signInFormSchema>

export function SignInForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormData>({
		resolver: zodResolver(signInFormSchema),
	})

	const onSubmit = (data: SignInFormData) => {
		const { email, password } = data

		signInWithEmailAndPassword({ email, password })
			.then(() => {
				toast.success('Login successful!')
				router.push('/')
			})
			.catch((error) => {
				toast.error('Error logging in, please try again.')
				console.error(error)
			})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid gap-2 w-full'>
			<InputField
				name='email'
				label='Email'
				register={register('email')}
				error={errors.email?.message}
			/>
			<InputField
				name='password'
				label='Password'
				register={register('password')}
				error={errors.password?.message}
			/>
			<Button type='submit'>Login</Button>
		</form>
	)
}
