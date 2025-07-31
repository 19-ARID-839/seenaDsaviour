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
  ChevronLeft,
  ChevronRight,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
// import { url } from "inspector"; // This import is likely unnecessary and can be removed
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

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const sectionContainerStyle = clsx(
    "relative bg-card border border-border shadow-lg p-4 transition-all duration-300",
    isOpen ? "w-60" : "w-12",
    isOpen ? "rounded-xl" : "rounded-xl"
  );

  const menuItemClass = (isOpen: boolean) =>
    clsx(
      "group relative flex flex-row items-center gap-1 px-2 py-2 rounded-xl hover:bg-white/10 cursor-pointer transition-all",
      isOpen ? "w-full items-start px-3" : "justify-center"
    );

  // Handle navigation and logout
  const handleNavigation = (url: string) => {
    if (url) { // Ensure url is not empty before navigating
      navigate(url);
    }
  };

  return (
    // Make sure this outer div is relative for the button to position correctly
    <div className="relative flex flex-col h-screen justify-start items-start gap-4 p-2 ml-5 bg-background transition-all duration-300 overflow-visible">

      {/* Chevron Button - Positioned relative to the main sidebar container */}
      <div className={clsx(
        "absolute top-20 z-50 tranform-y-10", 
        isOpen ? "left-[232px]" : "left-[42px]" // Adjust based on sidebar width + desired offset
      )}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card border border-border p-1 rounded-full shadow-md hover:bg-accent"
          title={isOpen ? "Collapse Menu" : "Expand Menu"}
        >
          {isOpen ? (
            <CircleChevronLeft className="w-5 h-5" />
          ) : (
            <CircleChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>


      {/* Section 1: Logo */}
      <div className={"h-10 flex items-center justify-center rounded-xl "}>
        <div className=" h-15 rounded-full overflow-auto flex flex-row items-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />{" "}
          {isOpen && (
            <div>
              <h1 className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-3000 text-[10px] ">
                SeenaDsaviour
              </h1>
              <h1 className=" text-[10px] ">Smart Education system</h1>
            </div>
          )}
        </div>
      </div>

      <div
        className={
          sectionContainerStyle +
          "flex-1 h-70 overflow-y-auto rounded-xl scrollbar-hide z-100"
        }
      >
        <div className="relative">
          {/* Removed the button from here */}
          <div className="flex flex-col gap-1 items-center justify-center p-0">
            {menuItems.map(({ title, icon: Icon, type, url }) => (
              <div
                key={title}
                className={menuItemClass(isOpen)}
                onClick={() => handleNavigation(url ?? "")}
              >
                {type === "danger" ? (
                  <Icon className="w-4 h-4 text-red-500" />
                ) : (
                  <Icon className="w-4 h-4 text-muted-foreground" />
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
      <div
        className={clsx(
          "bg-card border border-border p-4 transition-all duration-300 rounded-xl shadow-md",
          isOpen ? "w-60" : "w-12"
        )}
      >
        <div className="flex flex-col gap-1 items-center justify-center p-0">
          {lastIcons.map(({ title, icon: Icon, type, url }) => (
            <div
              key={title}
              className={menuItemClass(isOpen)}
              onClick={() => handleNavigation(url ?? "")}
            >
              {type === "danger" ? (
                <Icon className="w-4 h-4 text-red-500" />
              ) : (
                <Icon className="w-4 h-4 text-muted-foreground" />
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



// import {
//   LayoutDashboard,
//   BookOpen,
//   GraduationCap,
//   Users,
//   Brain,
//   Menu,
//   X,
//   Pen,
//   Wallet,
//   IdCard,
//   School,
//   List,
//   LayoutList,
//   Library,
//   Clover,
//   Calendar,
//   LogOut,
//   FileText,
//   LineChart,
//   Settings,
//   CalendarCheck,
//   Club,
//   TrendingUp,
//   FileChartLine,
//   ChevronLeft,
//   ChevronRight,
//   CircleChevronLeft,
//   CircleChevronRight,
// } from "lucide-react";
// import { useState } from "react";
// import clsx from "clsx";
// import { url } from "inspector";
// import { useNavigate } from "react-router-dom";

// const menuItems = [
//   { title: "Time Table", icon: Calendar, url: "/dashboard/time-table" },
//   { title: "Attendance", icon: Pen, url: "/dashboard/attendance" },
//   { title: "Exam Portal", icon: BookOpen },
//   { title: "Fee managment", icon: Wallet },
//   { title: "Leave Approval", icon: School },
//   { title: "News Manager", icon: IdCard },
//   { title: "Task Manager", icon: LayoutList, url: "/dashboard/task-manager" },
//   { title: "Calendar", icon: CalendarCheck },
//   { title: "Poll", icon: Clover },
//   { title: "Libarary", icon: Library },
//   { title: "Socities & Clubs", icon: Club },
//   { title: "Alumni", icon: GraduationCap, type: "" },
// ];

// const lastIcons = [
//   { title: "Remark Reporting", icon: TrendingUp },
//   { title: "Report Center", icon: FileChartLine },
//   { title: "Logout", icon: LogOut, type: "danger", url: "/" },
// ];

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const sectionContainerStyle = clsx(
//     "relative bg-card border border-border shadow-lg p-4 transition-all duration-300",
//     isOpen ? "w-60" : "w-12",
//     isOpen ? "rounded-xl" : "rounded-xl"
//   );

//   const menuItemClass = (isOpen: boolean) =>
//     clsx(
//       "group relative flex flex-row items-center gap-1 px-2 py-2 rounded-xl hover:bg-white/10 cursor-pointer transition-all",
//       isOpen ? "w-full items-start px-3" : "justify-center"
//     );

//   // Handle navigation and logout
//   const handleNavigation = (url: string) => {
//     navigate(url);
//   };
//   return (
//     <div className="relative flex flex-col h-screen justify-start items-start gap-4 p-2 ml-5 bg-background transition-all duration-300 overflow-visible">
//       {/* Section 1: Logo */}

//       <div className={"h-10 flex items-center justify-center rounded-xl "}>

//         <div className=" h-15 rounded-full overflow-auto flex flex-row items-center">
//           <img src="/logo.png" alt="Logo" className="w-10 h-10" />{" "}
//           {isOpen && (
//             <div>
//               <h1 className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-3000 text-[10px] ">
//                 SeenaDsaviour
//               </h1>
//               <h1 className=" text-[10px] ">Smart Education system</h1>
//             </div>
//           )}
//         </div>

//       </div>


//       <div
//         className={
//           sectionContainerStyle +
//           "flex-1 h-70 overflow-y-auto rounded-xl scrollbar-hide z-100"
//         }
//       >
//         <div className="relative">


//           <div className="absolute top-4 -right-9 transform z-50">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="bg-card border border-border p-1 rounded-full shadow-md hover:bg-accent"
//               title={isOpen ? "Collapse Menu" : "Expand Menu"}
//             >
//               {isOpen ? (
//                 <CircleChevronLeft className="w-5 h-5" />
//               ) : (
//                 <CircleChevronRight className="w-5 h-5" />
//               )}
//             </button>
//           </div>

//           <div className="flex flex-col gap-1 items-center justify-center p-0">
//             {menuItems.map(({ title, icon: Icon, type, url }) => (
//               <div
//                 key={title}
//                 className={menuItemClass(isOpen)}
//                 onClick={() => handleNavigation(url ?? "")}
//               >
//                 {type === "danger" ? (
//                   <Icon className="w-4 h-4 text-red-500" />
//                 ) : (
//                   <Icon className="w-4 h-4 text-muted-foreground" />
//                 )}
//                 {isOpen && type == "danger" ? (
//                   <span className="text-sm text-red-500">{title}</span>
//                 ) : isOpen ? (
//                   <span className="text-sm text-muted-foreground">{title}</span>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         className={clsx(
//           "bg-card border border-border p-4 transition-all duration-300 rounded-xl shadow-md",
//           isOpen ? "w-60" : "w-12"
//         )}
//       >
//         <div className="flex flex-col gap-1 items-center justify-center p-0">
//           {lastIcons.map(({ title, icon: Icon, type, url }) => (
//             <div
//               key={title}
//               className={menuItemClass(isOpen)}
//               onClick={() => handleNavigation(url ?? "")}
//             >
//               {type === "danger" ? (
//                 <Icon className="w-4 h-4 text-red-500" />
//               ) : (
//                 <Icon className="w-4 h-4 text-muted-foreground" />
//               )}
//               {isOpen && type == "danger" ? (
//                 <span className="text-sm text-red-500">{title}</span>
//               ) : isOpen ? (
//                 <span className="text-sm text-muted-foreground">{title}</span>
//               ) : null}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
