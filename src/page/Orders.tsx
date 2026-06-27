
import HedTable from "@/components/table/HedTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { ListFilter, Plus } from "lucide-react";
import TabeOrd from "@/components/menu/tabeOrd";

export const Orders = () => {
  const orders = [
    {
      id: "#ORD-124",
      time: "10:45 AM",
      tableNumber: "Table 4",

    },
    {
      id: "#ORD-123",
      time: "10:30 AM",
      tableNumber: "Table 12",
    },
    {
      id: "#ORD-122",
      time: "10:15 AM",
      tableNumber: "Table 7",
    },
    {
      id: "#ORD-121",
      time: "09:55 AM",
      tableNumber: "Table 2",

    },
    {
      id: "#ORD-120",
      time: "09:40 AM",
      tableNumber: "Table 15",

    },
  ];
  const data = [
    {
      label: "Filter",
      icon: <ListFilter />,
      className: "bg-white text-black  border border-black ",
    },
    {
      label: " New Order",
      icon: <Plus />,
      className: "bg-green-900 text-white hover:bg-green-800  ",
    },
  ];

  return (
    <>
      <HedTable
        title="Orders"
        description="Manage and track all incoming guest orders in real-time."
        actions={data}
      />
      <Card className="gap-0 overflow-hidden rounded-lg border border-[#d8ddda] bg-white py-0 shadow-none mt-6">
        <div className="flex items-center justify-between border-b border-[#d8ddda] px-6 py-5">
          <h2 className="text-lg font-bold text-[#022925]">Customer Orders</h2>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-9 border-[#bfc8c4] bg-white px-4 text-sm font-medium text-[#022925] hover:bg-[#f5f7f7]"
            >
              <ListFilter className="size-4" />
              Filter
            </Button>
            <Button
              type="button"
              className="h-9 bg-[#073c34] px-4 text-sm font-bold text-white hover:bg-[#0b4a40]"
            >
              <Plus className="size-4" />
              New Bill
            </Button>
          </div>
        </div>

       <TabeOrd 
       prps={orders}
       />

       
      </Card>
    </>
  );
};
