"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navbar_items, social_items, startup_items } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        {/* pages */}
        <SidebarGroup>
          <SidebarGroupLabel>Sahifalar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navbar_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* startups */}
        <SidebarGroup>
          <SidebarGroupLabel>Startups</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {startup_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex items-center border-t group-data-[collapsible='icon']:hidden">
          <div className="flex items-center gap-x-2 pt-2">
            {social_items.map((item, index) => (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="size-7 cursor-pointer"
                key={index}
                onClick={() => window.open(item.href, "_blank")}
              >
                <item.icon />
              </Button>
            ))}
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
