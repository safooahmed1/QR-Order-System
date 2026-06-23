import { Card, CardContent, CardHeader, CardTitle } from "./card";

export const StatCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Total Orders</CardTitle>
        </CardHeader>

        <CardContent>1284</CardContent>
      </Card>
    </div>
  );
};
