import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  User,
  ChevronDown,
  Brain,
  GraduationCap,
  Users,
  BookOpen,
  BarChart3,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAiClick = () => {
    if (location.pathname !== "/") {
      navigate("/#why-choose-us");
    } else {
      const section = document.getElementById("why-choose-us");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // close menu if on mobile
  };

  const handleSevenPsClick = () => {
  if (location.pathname !== "/") {
    navigate("/#seven-ps");
  } else {
    const section = document.getElementById("seven-ps");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  setIsMenuOpen(false);
};


  const menuItems = [
    { label: "Home", href: "/", icon: null },
    { label: "7 Ps", onClick: handleSevenPsClick, icon: GraduationCap },
    { label: "Community", href: "/community", icon: Users },
    { label: "AI Advantage", onClick: handleAiClick, icon: BarChart3 }, 
    { label: "Pricing", href: "/pricing", icon: BookOpen },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>*/}
            <img
              src="/logo.png"
              alt="SeenaDsaviour Logo"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-electric-purple">SeenaDsaviour</span>
              <span className="text-xs text-muted-foreground -mt-1">Smart Education System</span>
            </div> 
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-electric-purple transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))} */}
            {menuItems.map((item) =>
              item.onClick ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-foreground hover:text-electric-purple transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-electric-purple transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Search Bar */}
          {/* <div className="hidden md:flex items-center">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-64' : 'w-48'}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Smart search..."
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none transition-all duration-200"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="neon-border">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="btn-futuristic">
              <span>Get Started</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              {/* <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Smart search..."
                  className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none"
                />
              </div> */}

              {/* Mobile Navigation Links */}
              {/* {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                >
                  {item.icon && <item.icon className="w-5 h-5 text-electric-purple" />}
                  <span className="font-medium">{item.label}</span>
                </a>
              ))} */}

              {menuItems.map((item) =>
                item.onClick ? (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    {item.icon && (
                      <item.icon className="w-5 h-5 text-electric-purple" />
                    )}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    {item.icon && (
                      <item.icon className="w-5 h-5 text-electric-purple" />
                    )}
                    <span className="font-medium">{item.label}</span>
                  </a>
                )
              )}

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" className="neon-border w-full">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button className="btn-futuristic w-full">
                  <span>Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

// ---end
