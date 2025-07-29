// components/internalUI/Header.tsx
import { Button } from "@/components/ui/button";
import { Book, Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
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
    <header className="p-4 bg-background flex flex-wrap items-start justify-between gap-4 h-20">
      {/* Left */}
      <div className="flex flex-col">
        <h2 className="bg-gradient-primary bg-clip-text text-transparent">
          Hi, Sara!
        </h2>
        <p className="text-sm text-muted-foreground hidden md:block">
          Let’s take a look on your activity today
        </p>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
        <span>{formattedDate}</span>
        <span className="h-4 w-px bg-border" />
        <span>{formattedTime}</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-yellow-400" />
          ) : (
            <Moon className="w-4 h-4 text-zinc-700" />
          )}
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full">
          <Book className="w-4 h-4" />
        </Button>

        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-electric-purple to-neon-blue flex items-center justify-center">
          <span className="text-white text-sm font-semibold">SA</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
