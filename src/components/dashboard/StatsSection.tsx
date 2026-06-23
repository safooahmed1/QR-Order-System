import { StatCard } from "../ui/StatCard";

export const StatsSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  );
};
