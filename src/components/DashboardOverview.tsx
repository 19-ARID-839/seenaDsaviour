import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Activity
} from "lucide-react";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,234",
      change: "+12.5% from last month",
      trend: "up",
      icon: Users,
      status: "Active",
      statusColor: "from-electric-purple to-neon-blue"
    },
    {
      title: "Active Courses",
      value: "156",
      change: "+8.2% this semester",
      trend: "up",
      icon: BookOpen,
      status: "Running",
      statusColor: "from-neon-blue to-electric-purple"
    },
    {
      title: "Teachers",
      value: "89",
      change: "+2.1% faculty members",
      trend: "up",
      icon: GraduationCap,
      status: "Active",
      statusColor: "from-electric-purple to-neon-pink"
    },
    {
      title: "Avg Performance",
      value: "87.5%",
      change: "+5.3% overall grade",
      trend: "up",
      icon: TrendingUp,
      status: "Excellent",
      statusColor: "from-neon-pink to-electric-purple"
    }
  ];

  const aiInsights = [
    {
      title: "AI Predictions",
      value: "94.2%",
      change: "+1.8% accuracy rate",
      icon: Brain,
      status: "AI",
      statusColor: "from-electric-purple to-neon-blue"
    },
    {
      title: "At-Risk Students",
      value: "23",
      change: "-15.2% identified by AI",
      icon: AlertTriangle,
      status: "Alert",
      statusColor: "from-neon-pink to-electric-purple"
    },
    {
      title: "Success Rate",
      value: "91.8%",
      change: "+3.4% completion rate",
      icon: Award,
      status: "High",
      statusColor: "from-neon-blue to-electric-purple"
    },
    {
      title: "Avg Study Time",
      value: "4.2h",
      change: "+0.8h per day",
      icon: Clock,
      status: "Optimal",
      statusColor: "from-electric-purple to-neon-pink"
    }
  ];

  const alerts = [
    {
      type: "high",
      title: "Student Performance Alert",
      description: "5 students showing declining grades in Mathematics",
      icon: AlertTriangle
    },
    {
      type: "medium",
      title: "Course Recommendation",
      description: "Advanced Python course ready for 12 high-performing students",
      icon: Target
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Welcome to seenaDsaviour
        </h1>
        <p className="text-muted-foreground">Your intelligent learning management dashboard</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.statusColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Badge className={`bg-gradient-to-r ${stat.statusColor} text-white`}>
                  {stat.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-green-500 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiInsights.map((insight, index) => (
          <Card key={index} className="hover-lift border-electric-purple/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${insight.statusColor} rounded-lg flex items-center justify-center`}>
                  <insight.icon className="w-5 h-5 text-white" />
                </div>
                <Badge variant="outline" className="border-electric-purple text-electric-purple">
                  {insight.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{insight.title}</p>
                <p className="text-2xl font-bold text-foreground mb-2">{insight.value}</p>
                <p className="text-sm text-electric-purple">{insight.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI-Powered Insights Section */}
      <Card className="neon-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-purple to-neon-blue rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <CardTitle className="text-xl">AI-Powered Insights</CardTitle>
          </div>
          <Badge className="bg-gradient-to-r from-electric-purple to-neon-blue text-white">
            Live
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                alert.type === 'high' ? 'bg-red-500/20 text-red-500' : 'bg-yellow-500/20 text-yellow-500'
              }`}>
                <alert.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">
                  {alert.title}
                  {alert.type === 'high' && (
                    <Badge variant="destructive" className="ml-2 text-xs">High</Badge>
                  )}
                  {alert.type === 'medium' && (
                    <Badge className="ml-2 text-xs bg-yellow-500">Medium</Badge>
                  )}
                </h4>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;