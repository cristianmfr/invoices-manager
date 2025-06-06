import { SignInForm } from '@/components/forms/sign-in-form'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export default function SignInPage() {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle>Sign In</CardTitle>
				<CardDescription>
					Enter your email and password to sign in.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignInForm />
			</CardContent>
		</Card>
	)
}
