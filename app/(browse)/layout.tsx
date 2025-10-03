import AppNavbar from "@/components/shared/AppNavbar";
import AppSidebar from "@/components/shared/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full lg:mr-2">
        <AppNavbar />
        <section className="mt-2 max-w-6xl mx-auto mb-12">{children}</section>
      </main>
    </SidebarProvider>
  );
}

export default Layout;
