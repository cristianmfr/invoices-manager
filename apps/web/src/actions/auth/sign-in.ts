import { api } from '@/lib/api-client'

interface SignInRequest {
	email: string
	password: string
}

interface SignInResponse {
	accessToken: string
}

export async function signIn({ email, password }: SignInRequest) {
	const result = await api
		.post('auth/sign-in', {
			json: {
				email,
				password,
			},
		})
		.json<SignInResponse>()

	return result
}
