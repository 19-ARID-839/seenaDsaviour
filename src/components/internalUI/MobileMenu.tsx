// components/internalUI/MobileMenu.tsx
import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Users,
  GraduationCap,
  ClipboardList,
  Trophy,
  Brain,
  Lightbulb,
  UserCheck,
  MessageSquare,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BarChart3, label: "Stats" },
  { icon: FileText, label: "Documents" },
  { icon: Users, label: "Users" },
  { icon: GraduationCap, label: "Courses" },
  { icon: ClipboardList, label: "Tasks" },
  { icon: Trophy, label: "Achievements" },
  { icon: Brain, label: "AI" },
  { icon: Lightbulb, label: "Ideas" },
  { icon: UserCheck, label: "Attendance" },
  { icon: MessageSquare, label: "Messages" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 text-muted-foreground"
      >
        <LayoutDashboard />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer Menu */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 z-50 bg-background p-4 shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-3">
          {menuItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:bg-muted p-2 rounded-md transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default MobileMenu;
