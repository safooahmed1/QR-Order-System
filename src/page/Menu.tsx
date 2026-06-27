import HedTable from "@/components/table/HedTable";
import { StatCard } from "@/components/ui/StatCard";
import { Download, ListFilter, Plus } from "lucide-react";
import Tablesmenu from "@/components/menu/tablesmenu"
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigat = useNavigate()
  const data = [
    {
      label: "Filter",
      icon: <ListFilter />,
      className: "bg-green-900 text-white hover:bg-green-800  ",
    },
    {
      label: "Export",
      icon: <Download />,
      className: "bg-green-900 text-white hover:bg-green-800  ",
    },
    {
      label: "Add Product",
      icon: <Plus />,
      className: "bg-green-900 text-white hover:bg-green-800  ",
      onClick: ()=>{navigat("/AddProduct")}
    },
  ];
  return (
    <div className="p-6 grid grid-cols-1 gap-6 ">
      <HedTable
        title="Menu Management"
        description="Curate and optimize your culinary offerings with precision."
        actions={data}
      />
      <div>
        <StatCard />
      </div>
      <div className="mt-5">
       <Tablesmenu/>
      </div>
    </div>
  );
};
