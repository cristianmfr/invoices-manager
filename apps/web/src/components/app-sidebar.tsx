'use client'

import { FileTextIcon } from 'lucide-react'

import { MainSidebarItems } from './main-sidebar-items'
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
} from './ui/sidebar'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props} collapsible='offcanvas'>
			<SidebarHeader>
				<SidebarMenuButton
					asChild
					className='data-[slot=sidebar-menu-button]:!p-1.5 h-12 -mb-2'
				>
					<a href='#' className='flex items-center gap-2'>
						<div className='flex items-center justify-center size-10 bg-primary rounded-md'>
							<FileTextIcon className='size-6 text-accent' />
						</div>
						<span className='text-base font-semibold'>Invoices</span>
					</a>
				</SidebarMenuButton>
			</SidebarHeader>
			<SidebarContent className='px-2'>
				<SidebarMenu>
					<MainSidebarItems />
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	)
}
