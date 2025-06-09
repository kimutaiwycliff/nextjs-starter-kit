'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarMenuItems } from '@/lib/constant';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const DashboardNavbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 justify-between">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Button
          variant={'outline'}
          size={'sm'}
          className="h-9 w-[240px] justify-start text-muted-foreground hover:text-muted-foreground"
        >
          <SearchIcon /> Search
          <kbd className="ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium pointer-events-none">
            <span className="text-xs">&#8984;</span>K
          </kbd>
        </Button>
      </div>
      <div className="flex items-center gap-2 px-5">
        {SidebarMenuItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className={cn(
              'flex items-center gap-1 rounded-lg',
              pathName === item.url &&
                'border border-[#5D6B68]/10 bg-gray-300'
            )}
          >
            <Button variant="ghost" size="sm">
              <item.icon className="h-4 w-4" />
              <span className="text-sm tracking-tight">{item.title}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};
