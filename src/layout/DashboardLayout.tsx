import { AppSidebar } from "@/components/app-sidebar";
import { HeaderDashboard } from "@/components/dashboard/HeaderDashboard";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header>
          <HeaderDashboard />
        </header>

        <main className="p-5">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
