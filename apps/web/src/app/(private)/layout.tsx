'use client'

import { AppSidebar } from '@/components/app-sidebar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { Bell, LogOut, Settings2, User2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	const router = useRouter()

	const [user, setUser] = useState<{ name?: string } | null>(null)

	useEffect(() => {
		const userJson = localStorage.getItem('user')
		setUser(userJson ? JSON.parse(userJson) : null)
	}, [])

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='grid grid-cols-2 p-4 border-b'>
					<div className='flex items-center gap-4 w-full'>
						<SidebarTrigger />
						<Button
							size='sm'
							type='button'
							variant={!pathname.includes('calendar') ? 'secondary' : 'ghost'}
							onClick={() => router.push('/')}
						>
							Financeiro
						</Button>
						<Button
							size='sm'
							type='button'
							variant={pathname.includes('calendar') ? 'secondary' : 'ghost'}
							onClick={() => router.push('/calendar')}
						>
							Agenda
						</Button>
					</div>
					<div className='flex items-center justify-end gap-4 w-full'>
						<Sheet>
							<SheetTrigger asChild>
								<Button size='icon' type='button' variant='ghost'>
									<Bell />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>Notificações</SheetTitle>
								</SheetHeader>
							</SheetContent>
						</Sheet>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button size='icon' type='button' className='rounded-full'>
									<span className='uppercase'>
										{user?.name?.slice(0, 2) || 'UN'}
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>
									<User2 />
									Minha Conta
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings2 />
									Configurações
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => {}}>
									<LogOut />
									Sair
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</header>
				<div className='flex flex-1 flex-col '>{children}</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
