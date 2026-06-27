import { StatCard } from "../ui/StatCard";
import { TbPicnicTable } from "react-icons/tb";
import { MdOutlineNewspaper } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiTrendUp } from "react-icons/pi";
import { PiTrendDown } from "react-icons/pi";

export const StatsSection = () => {
  type Card = {
    status: string | React.ReactNode;
    value: number;
    title: string;
    icon : React.ReactNode;
  };

  type TypeStateRevenue = { 
     StateRevenue : React.ReactNode
  }

  type StateRevenue ={
   // Revenue: <PiTrendUp /> | <PiTrendDown />
} 

  let cards: Card[] = [
    { status: "LIVE STATUS", value: 45, title: "Total Tables", icon: <TbPicnicTable /> },
    { status: "TODAY", value: 45, title: "Total Orders", icon: <MdOutlineNewspaper /> },
    { status: "URGENT", value: 45, title: "Active Orders", icon: <BsFillBellFill /> },
    { status: "Revenue", value: 45, title: "Total Revenue", icon: <FaMoneyBillWave /> },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((el, index) => (
        <StatCard
          key={index}
          status={el?.status}
          value={el.value}
          title={el.title}
          icon={el.icon}
        />
      ))}
    </div>
  );
};
