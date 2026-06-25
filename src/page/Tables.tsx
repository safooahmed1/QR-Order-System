import HedTable from "@/components/table/HedTable";
import QR from "@/components/table/QR";
import { StatCard } from "@/components/ui/StatCard";
import { Plus } from "lucide-react";

export default function Tables() {
  const data = [
    {
      label: "Add Table",
      icon: <Plus />,
      className: "bg-green-900 text-white hover:bg-green-800  ",
    },
  ];
  return (
    <div className="p-6 grid grid-cols-1 gap-6 ">
      <HedTable
        title="Tables"
        description="Manage your floor layout and guest capacity "
        actions={data}
      />
      <div>
        <StatCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <QR />
        <QR />
        <QR />
        <QR />
      </div>
    </div>
  );
}
