import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { TbPicnicTable } from "react-icons/tb";
import { MdOutlineNewspaper } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { HelpCircleIcon, LogOut } from "lucide-react";
export function AppSidebar() {
  const location = useLocation();

  type Nevget = {
    icon: React.ReactNode;
    nev: string;
    path: string;
  };
  let nevget: Nevget[] = [
    { icon: <RiDashboardLine />, nev: "Dashboard", path: "/" },
    { icon: <TbPicnicTable />, nev: "tables", path: "/tables" },
    { icon: <MdOutlineNewspaper />, nev: "Orders", path: "/orders" },
    { icon: <MdRestaurantMenu />, nev: "Menu ", path: "/menu" },
    { icon: <IoMdAnalytics />, nev: "Analytics ", path: "/analytics" },
  ];

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="p-5 border-b">
        <h2 className="text-2xl font-semibold">Lumiere Dining</h2>
        <span className="text-gray-500">Restaurant Management</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {nevget.map((el, index) => {
                const isActive = location.pathname===el.path;
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <NavLink className={isActive?"bg-gray-200":""} to={el.path}>
                        {el.icon} {el.nev}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <HelpCircleIcon /> Help
            </SidebarMenuButton>
            <SidebarMenuButton>
              <LogOut /> Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
