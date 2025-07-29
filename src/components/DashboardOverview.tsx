import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Brain,
  Target,
  Clock,
  AlertTriangle,
  Award,
  Activity,
} from "lucide-react";

const DashboardOverview = () => {
  const overviewCards = [
    {
      title: "Institutes",
      value: "40",
      change: "+11.0% from this month",
      icon: Activity,
    },
    {
      title: "Total Student",
      value: "15600",
      change: "+8.3% this session",
      icon: Users,
    },
    {
      title: "Teachers",
      value: "5000",
      change: "+2.1% faculty members",
      icon: GraduationCap,
    },
    {
      title: "Success Rate",
      value: "91.34%",
      change: "+3.4% completion rate",
      icon: TrendingUp,
    },
  ];

  const aiInsights = [
    {
      title: "Student Performance Alert",
      description: "5 students grades are declining in physics",
      level: "High",
      color: "bg-red-600",
      icon: AlertTriangle,
    },
    {
      title: "Course Recommendation",
      description: "Advanced Python course ready for top students",
      level: "Medium",
      color: "bg-yellow-400",
      icon: Target,
      action: "Create Course",
    },
    {
      title: "Engagement Boost",
      description: "Interactive quiz format increases participation by 40%",
      level: "Low",
      color: "bg-green-600",
      icon: Brain,
    },
    {
      title: "Attendance Pattern",
      description: "Friday classes have 25% lower attendance rates",
      level: "Medium",
      color: "bg-yellow-400",
      icon: Clock,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewCards.map((card, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-muted-foreground">{card.title}</div>
                <card.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {card.value}
              </div>
              <div className="text-sm text-green-500">{card.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">AI-Powered Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiInsights.map((item, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${item.color}`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <Badge
                      className={`text-xs px-2 py-0.5 text-white ${item.color}`}
                    >
                      {item.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.description}
                  </p>
                  {item.action && (
                    <Button size="sm" variant="outline">
                      {item.action}
                    </Button>
                  )}
                  {!item.action && (
                    <Button size="sm" variant="outline">
                      View details
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
