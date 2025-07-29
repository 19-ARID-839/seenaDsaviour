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
  Sun,
  Moon,
  Book,
  X,
  Menu,
} from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import Sidebar from "./internalUI/Sidebar";
import MobileMenu from "./internalUI/MobileMenu";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
  
      <div className="flex-1 flex flex-col h-full">
        <main className="flex-1 overflow-y-auto p-6 bg-background h-full">
          {children}
        </main>
      </div>

  );
};

export default DashboardLayout;
