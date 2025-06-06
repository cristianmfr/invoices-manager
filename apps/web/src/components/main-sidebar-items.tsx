'use client'

import {
	FileTextIcon,
	LayoutDashboardIcon,
	LucideIcon,
	MailIcon,
	MessageCircle,
	PlusCircleIcon,
	ServerIcon,
} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from './ui/button'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'

type SidebarMenuItem = {
	url: string
	label: string
	icon?: LucideIcon
}

export function MainSidebarItems() {
	const pathname = usePathname()
	const { push } = useRouter()

	const mainItems: SidebarMenuItem[] = [
		{
			url: '/',
			label: 'Dashboard',
			icon: LayoutDashboardIcon,
		},
		{
			url: '/invoices',
			label: 'Faturas',
			icon: FileTextIcon,
		},
		{
			url: '/sended-logs',
			label: 'Logs',
			icon: ServerIcon,
		},
	]

	return (
		<SidebarMenu>
			<SidebarMenuItem className='px-2 py-1'>
				<span className='text-xs font-medium text-muted-foreground'>
					Invoices Manager
				</span>
			</SidebarMenuItem>
			<SidebarMenuItem>
				<div className='flex items-center w-full gap-2'>
					<div className='flex-1'>
						<Button className='justify-start w-full' variant='outline'>
							<PlusCircleIcon />
							<span>Send Invoices</span>
						</Button>
					</div>
					<div className='flex items-center gap-2'>
						<Button size='icon' variant='secondary'>
							<MailIcon />
						</Button>
						<Button size='icon' variant='secondary'>
							<MessageCircle />
						</Button>
					</div>
				</div>
			</SidebarMenuItem>
			{mainItems.map((item, index) => (
				<SidebarMenuItem key={index}>
					<SidebarMenuButton
						isActive={item.url === pathname}
						className='transition ease-in cursor-pointer px-3'
						onClick={() => push(item.url)}
					>
						{item.icon && <item.icon />}
						{item.label}
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	)
}
