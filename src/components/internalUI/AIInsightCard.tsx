// components/dashboard/InsightCard.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface InsightCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  status: string;
  statusColor: string;
}

export const InsightCard = ({ title, value, change, icon: Icon, status, statusColor }: InsightCardProps) => {
  return (
    <Card className="bg-white dark:bg-[#0e0e11] border border-electric-purple/20 shadow-sm rounded-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-10 h-10 bg-gradient-to-r ${statusColor} rounded-md flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <Badge variant="outline" className="border-electric-purple text-electric-purple text-xs">
            {status}
          </Badge>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
          <p className="text-sm text-electric-purple">{change}</p>
        </div>
      </CardContent>
    </Card>
  );
};
