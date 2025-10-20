import { SidebarProvider } from "@/components/ui/sidebar";
import { CSSProperties, ReactNode } from "react";
import CourseSidebar from "./_components/CourseSidebar";
import Navbar from "../../_components/Navbar";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

const Layout = async ({ children }: LayoutProps) => {
  const sidebarStyle = {
    "--sidebar-width": "20rem",
    "--sidebar-width-mobile": "20rem",
  } as CSSProperties;

  return (
    <SidebarProvider style={sidebarStyle}>
      <CourseSidebar />

      <main className="w-full lg:mr-2">
        <Navbar />
        <div className="mt-2 mb-12">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
