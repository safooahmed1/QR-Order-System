import { BottomSection } from "@/components/dashboard/BottomSection";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { StatsSection } from "@/components/dashboard/StatsSection";

export const Dashboard = () => {
  return (
    <div>
      <StatsSection />
      <RecentOrders />
      <BottomSection />
    </div>
  );
};
