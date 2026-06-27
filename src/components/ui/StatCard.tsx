import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "@/components/ui/badge";

type StateCardProps = {
  status?: string;
  value: number;
  title: string;
  icon: React.ReactNode;
};

export const StatCard = ({ title, value, status, icon }: StateCardProps) => {
   const renderContent = () => {
    switch (status) {
      case "LIVE STATUS":
        return <Badge>{status}</Badge>;
        break;
      case "URGENT":
        return <Badge variant="destructive">{status}</Badge>;
        break;
      case "TODAY":
        return <Badge variant="outline">{status}</Badge>;
        break;
      default:
        return <Badge variant="secondary">{status}</Badge>;
        break;
    }
  };
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between">
          <Card className="w-10 flex items-center justify-center " size="sm">
            <div className="scale-150">{icon}</div>
          </Card>
          {renderContent()}
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-semibold">{value}</div>
          <CardTitle>{title}</CardTitle>
        </CardContent>
      </Card>
    </div>
  );
};
