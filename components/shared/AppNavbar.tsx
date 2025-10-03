import Link from "next/link";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Contact, LogIn } from "lucide-react";

function AppNavbar() {
  return (
    <header className="w-full h-20 bg-sidebar border-b px-4 mt-2 rounded-lg sticky top-2 z-50">
      <div className="flex items-center justify-between h-full">
        <Logo />

        <div className="flex items-center lg:gap-x-2 gap-x-1">
          <SidebarTrigger />
          <ModeToggle />
          <Button asChild size="icon" variant="secondary" className="size-7">
            <Link href="/contact">
              <Contact />
            </Link>
          </Button>
          <Button asChild size={"sm"}>
            <Link href="/sign-in">
              <span>Sign in</span>
              <LogIn />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default AppNavbar;
