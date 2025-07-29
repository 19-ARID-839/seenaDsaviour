// components/dashboard/AlertCard.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AlertCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  type: "high" | "medium";
}

export const AlertCard = ({ title, description, icon: Icon, type }: AlertCardProps) => {
  const colorStyles =
    type === "high"
      ? "bg-red-500/20 text-red-500"
      : "bg-yellow-500/20 text-yellow-500";

  return (
    <div className="flex items-start space-x-4 p-4 bg-white dark:bg-muted/50 rounded-xl shadow-sm">
      <div className={`w-8 h-8 rounded-md flex items-center justify-center ${colorStyles}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 flex items-center">
          {title}
          {type === "high" ? (
            <Badge variant="destructive" className="ml-2 text-xs">High</Badge>
          ) : (
            <Badge className="ml-2 text-xs bg-yellow-500">Medium</Badge>
          )}
        </h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button variant="outline" size="sm">View Details</Button>
    </div>
  );
};
