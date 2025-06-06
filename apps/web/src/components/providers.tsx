'use client'

import { Suspense } from 'react'

import { ThemeProvider } from './theme-provider'
import { Toaster } from './toaster'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Suspense>
			<ThemeProvider
				attribute='class'
				defaultTheme='dark'
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
			<Toaster />
		</Suspense>
	)
}
