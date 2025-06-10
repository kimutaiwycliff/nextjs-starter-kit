'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { SidebarMenuItems } from '@/lib/constant';
import { NavMain } from './nav-main-without-collapsible';
import { NavUser } from './nav-user';
import { authClient } from '@/lib/auth-client';

export const DashboardSidebar = () => {
  const { data: session } = authClient.useSession();
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="text-sidebar-accent-foreground">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={32} height={32} />
                <span className="text-base font-semibold">Meet AI</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={SidebarMenuItems} />
      </SidebarContent>
      <SidebarFooter>
        {session && (
          <NavUser
            user={{ ...session.user, image: session.user.image ?? '' }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
