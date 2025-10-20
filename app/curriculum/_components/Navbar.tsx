import Logo from "@/components/shared/Logo";
import React from "react";
import ReviewModal from "./ReviewModal";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/shared/ModeToggle";

function Navbar() {
  return (
    <div className="w-full h-20 bg-sidebar border-b px-4 mt-2 rounded-lg border sticky top-2 z-50">
      <div className="flex items-center justify-between h-full">
        <Logo />

        <div className="flex items-center lg:gap-x-2 gap-x-1">
          <ReviewModal />
          <SidebarTrigger />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
