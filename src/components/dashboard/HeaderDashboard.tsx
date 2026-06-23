import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoNotifications } from "react-icons/io5";

export const HeaderDashboard = () => {
  return (
    <div className="border-b  p-5 flex justify-between ">
      <div>
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
