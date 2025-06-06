'use server'

import { signIn } from '@/actions/auth/sign-in'
import { SignInFormData } from '@/components/forms/sign-in-form'
import { HTTPError } from 'ky'
import { cookies } from 'next/headers'

export async function signInWithEmailAndPassword(data: SignInFormData) {
	const { email, password } = data

	try {
		const { accessToken } = await signIn({
			email,
			password,
		})

		const cookieStore = await cookies()
		cookieStore.set('accessToken', accessToken, {
			path: '/',
			maxAge: 60 * 60 * 24 * 7,
		})
	} catch (err) {
		if (err instanceof HTTPError) {
			const { message } = await err.response.json()

			return { success: false, message, errors: null }
		}

		console.error(err)

		return {
			success: false,
			message: 'Unexpected error, try again in a few minutes.',
			errors: null,
		}
	}

	return { success: true, message: null, errors: null }
}
