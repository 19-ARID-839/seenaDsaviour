import {
  Calendar,
  Pen,
  BookOpen,
  Wallet,
  School,
  IdCard,
  LayoutList,
  CalendarCheck,
  Clover,
  Library,
  Club,
  GraduationCap,
  TrendingUp,
  FileChartLine,
  LogOut,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { title: "Time Table", icon: Calendar, url: "/dashboard/time-table" },
  { title: "Attendance", icon: Pen, url: "/dashboard/attendance" },
  { title: "Exam Portal", icon: BookOpen },
  { title: "Fee managment", icon: Wallet },
  { title: "Leave Approval", icon: School },
  { title: "News Manager", icon: IdCard },
  { title: "Task Manager", icon: LayoutList, url: "/dashboard/task-manager" },
  { title: "Calendar", icon: CalendarCheck },
  { title: "Poll", icon: Clover },
  { title: "Libarary", icon: Library },
  { title: "Socities & Clubs", icon: Club },
  { title: "Alumni", icon: GraduationCap, type: "" },
];

const lastIcons = [
  { title: "Remark Reporting", icon: TrendingUp },
  { title: "Report Center", icon: FileChartLine },
  { title: "Logout", icon: LogOut, type: "danger", url: "/" },
];

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    if (url) navigate(url);
  };

  const menuItemClass = (isOpen: boolean) =>
    clsx(
      "group flex items-center gap-2 px-3 py-2 rounded-lg transition-all cursor-pointer hover:bg-muted",
      isOpen ? "justify-start" : "justify-center"
    );

  return (
    <>
      {/* Toggle Button (Floating) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-5 left-5 z-[60] p-2 bg-background border rounded-full shadow-lg hover:bg-accent"
        >
          <CircleChevronRight />
        </button>
      )}

      {/* Drawer Sidebar */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full bg-background border-r shadow-xl z-[70] transform transition-transform duration-300",
          isOpen ? "translate-x-0 w-[260px]" : "-translate-x-full w-[260px]"
        )}
      >
        {/* Header with Logo and Close */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-sm font-bold bg-gradient-primary bg-clip-text text-transparent">
                SeenaDsaviour
              </h1>
              <h2 className="text-xs text-muted-foreground">
                Smart Education System
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full bg-muted"
          >
            <CircleChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-1 p-4">
          {menuItems.map(({ title, icon: Icon, type, url }) => (
            <div
              key={title}
              className={menuItemClass(true)}
              onClick={() => handleNavigation(url ?? "")}
            >
              <Icon className={clsx("w-4 h-4", type === "danger" && "text-red-500")} />
              <span
                className={clsx("text-sm", type === "danger" ? "text-red-500" : "text-muted-foreground")}
              >
                {title}
              </span>
            </div>
          ))}
        </nav>

        <hr className="mx-4 my-2 border-border" />

        {/* Bottom Items */}
        <nav className="flex flex-col gap-1 px-4 pb-4">
          {lastIcons.map(({ title, icon: Icon, type, url }) => (
            <div
              key={title}
              className={menuItemClass(true)}
              onClick={() => handleNavigation(url ?? "")}
            >
              <Icon className={clsx("w-4 h-4", type === "danger" && "text-red-500")} />
              <span
                className={clsx("text-sm", type === "danger" ? "text-red-500" : "text-muted-foreground")}
              >
                {title}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Optional Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
        />
      )}
    </>
  );
}
