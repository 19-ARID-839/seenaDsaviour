import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  BarChart3, 
  FileText, 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardList, 
  Trophy,
  Brain,
  Lightbulb,
  UserCheck,
  MessageSquare,
  Search,
  Bell,
  Settings,
  ChevronDown,
  ChevronRight
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { 
      title: "OVERVIEW", 
      items: [
        { icon: LayoutDashboard, label: "Dashboard", active: true },
        { icon: BarChart3, label: "Analytics" },
        { icon: FileText, label: "Reports" }
      ]
    },
    {
      title: "ACADEMIC MANAGEMENT",
      items: [
        { icon: GraduationCap, label: "Students" },
        { icon: Users, label: "Teachers" },
        { icon: BookOpen, label: "Courses" },
        { icon: ClipboardList, label: "Assignments" },
        { icon: Trophy, label: "Gradebook" }
      ]
    },
    {
      title: "AI FEATURES",
      items: [
        { icon: Brain, label: "AI Analytics" },
        { icon: Lightbulb, label: "Smart Recommendations" },
        { icon: UserCheck, label: "AI Tutor" }
      ]
    },
    {
      title: "COMMUNICATION",
      items: [
        { icon: MessageSquare, label: "Messages" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-border bg-gradient-to-r from-electric-purple to-neon-blue">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
              <span className="text-electric-purple font-bold text-sm">S</span>
            </div>
            <div className="text-white">
              <h3 className="font-bold text-sm">seenaDsaviour</h3>
              <p className="text-xs opacity-90">Learning Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {menuItems.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-2">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors ${
                      item.active 
                        ? "bg-electric-purple text-white" 
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.active && <ChevronDown className="w-4 h-4 ml-auto" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search students, courses, assignments..." 
                  className="pl-10 bg-muted/50"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-electric-purple to-neon-blue text-white">
                AI
              </Badge>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-electric-purple to-neon-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">AD</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;