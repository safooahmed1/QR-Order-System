import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoNotifications } from "react-icons/io5";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const HeaderDashboard = () => {
  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <h1 className="text-black text-2xl font-bold">LoGo CoFFee</h1>
      </div>
      <div className="flex items-center gap-3">
        <IoNotifications size={20} />
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
