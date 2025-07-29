import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  Brain,
  Menu,
  X,
  Pen,
  Wallet,
  IdCard,
  School,
  List,
  LayoutList,
  Library,
  Clover,
  Calendar,
  LogOut,
  FileText,
  LineChart,
  Settings,
  CalendarCheck,
  Club,
  TrendingUp,
  FileChartLine,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { url } from "inspector";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { title: "Time Table", icon: Calendar },
  { title: "Attendance", icon: Pen , url: "/dashboard/attendance" },
  { title: "Exam Portal", icon: BookOpen },
  { title: "Fee managment", icon: Wallet },
  { title: "Leave Approval", icon: School },
  { title: "News Manager", icon: IdCard },
  { title: "Task Manager", icon: LayoutList, url: "/dashboard/task-manager" },
  { title: "Calendar", icon: CalendarCheck },
  { title: "Poll", icon: Clover },
  { title: "Libarary", icon: Library },
  { title: "Socities & Clubs", icon: Club },
  { title: "Alumni", icon: GraduationCap },
  { title: "Remark Reporting", icon: TrendingUp },
  { title: "Report Center", icon: FileChartLine },
  { title: "Logout", icon: LogOut, type: "danger", url: "/" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const sectionContainerStyle = clsx(
    "bg-card border border-border shadow-lg p-4 transition-all duration-300",
    isOpen ? "w-60" : "w-20",
    isOpen ? "rounded-xl" : "rounded-xl"
  );

  const menuItemClass = (isOpen: boolean) =>
    clsx(
      "group relative flex flex-row items-center gap-1 px-2 py-2 rounded-xl hover:bg-white/10 cursor-pointer transition-all",
      isOpen ? "w-full items-start px-3" : "justify-center"
    );

  // Handle navigation and logout
  const handleNavigation = (url: string) => {
    navigate(url);
  };
  return (
    <div className="flex flex-col h-screen justify-start items-center gap-4 p-2 bg-background">
      {/* Section 1: Logo */}
      <div
        className={
          sectionContainerStyle +
          "h-10 flex items-center justify-center rounded-xl"
        }
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-auto">
            <img src="/logo.png" alt="Logo" className="w-full h-full" />
          </div>
          {isOpen && (
            <h1 className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-3000 font-semibold text-lg">
              SeenaDsaviour
            </h1>
          )}
        </div>
      </div>
      {/* <div className={menuItemClass(isOpen) + 'text-muted-foreground position-fixed top-0 left-0 right-0 z-50 p-2 rounded-full'} onClick={() => setIsOpen(!isOpen)} >
              <Menu className="w-5 h-5 text-muted-foreground" />
              {isOpen && <span className="text-sm text-muted-foreground">Close</span>}
            
          </div> */}

      {/* Section 2: Menu with Toggle */}
      <div
        className={
          sectionContainerStyle +
          "flex-1 h-89 overflow-y-auto rounded-xl scrollbar-hide"
        }
      >
        <div className="flex flex-col gap-1 items-center justify-center">
          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground position-fixed top-0 left-0 right-0 z-50 p-2 rounded-full"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />} {isOpen && "Close Menu"}
          </button> */}
          <div
            className={
              menuItemClass(isOpen) +
              "text-muted-foreground position-fixed top-0 left-0 right-0 z-50 p-2 rounded-full"
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
            {isOpen && (
              <span className="text-sm text-muted-foreground">Close</span>
            )}
          </div>

          {menuItems.map(({ title, icon: Icon, type, url }) => (
            <div
              key={title}
              className={menuItemClass(isOpen)}
              onClick={() => handleNavigation(url ?? "")}
            >
              {type === "danger" ? (
                <Icon className="w-5 h-5 text-red-500" />
              ) : (
                <Icon className="w-5 h-5 text-muted-foreground" />
              )}
              {isOpen && type == "danger" ? (
                <span className="text-sm text-red-500">{title}</span>
              ) : isOpen ? (
                <span className="text-sm text-muted-foreground">{title}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
