import { Loader2 } from 'lucide-react'

export const LoadingSpinner = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<Loader2 className='size-6 animate-spin' />
		</div>
	)
}
