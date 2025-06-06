import { RecoveryForm } from '@/components/forms/recovery-form'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export default function RecoveryPage() {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle>Recover your account</CardTitle>
				<CardDescription>
					Enter your email to receive a recovery link.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<RecoveryForm />
			</CardContent>
		</Card>
	)
}
