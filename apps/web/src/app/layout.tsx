import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { AppProvider } from '../components/providers'
import './globals.css'

const fontSans = Geist({
	subsets: ['latin'],
	variable: '--font-sans',
})

const fontMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
})

export const metadata: Metadata = {
	title: {
		default: 'Invoices Manager',
		template: `%s | Invoices Manager`,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
			>
				<NuqsAdapter>
					<AppProvider>{children}</AppProvider>
				</NuqsAdapter>
			</body>
		</html>
	)
}
