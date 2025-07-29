// components/dashboard/StatCard.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  status: string;
  statusColor: string; // Tailwind gradient like: "from-electric-purple to-neon-blue"
}

export const StatCard = ({ title, value, change, icon: Icon, status, statusColor }: StatCardProps) => {
  return (
    <Card className="hover-lift">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          {/* <div className={`w-12 h-12 bg-gradient-to-r ${statusColor} rounded-md flex items-center justify-center`}> */}
            <Button
             variant="ghost"
                size="sm"
            >
                 <Icon className="w-4 h-4 text-electric-purple" />
            </Button>
           
          {/* </div> */}
          <Badge className={`text-white bg- px-2 py-1 text-xs rounded-full`}>
            {status}
          </Badge>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
          <p className="text-sm text-green-500 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            {change}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
