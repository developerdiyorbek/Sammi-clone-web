import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import React from "react";
import SectionList from "./SectionList";

function CourseSidebar() {
  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarGroupContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-space-grotesk">
            JavaScript
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SectionList />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarGroupContent>

      <SidebarFooter className="flex items-center justify-center">
        <Progress />
        <div className="font-space-grotesk">10% Completed</div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default CourseSidebar;
