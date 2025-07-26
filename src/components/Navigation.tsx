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
import DropdownMenu from "@/components/ui/Dropdown";
// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    {
      label: "About Us",
      href: "/about",
      icon: null,
      dropdown: [
        { label: "Our Team", onClick: handleAiClick, icon: Users },
        { label: "Our Mission", onClick: handleAiClick, icon: Brain },
        { label: "Careers", href: "/careers", icon: GraduationCap },
      ],
    },
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
              <span className="text-lg font-bold text-electric-purple hover-colorchange">
                SeenaDsaviour
              </span>
              <span className="text-xs text-foreground -mt-1">
                Smart Education System
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHovered(item.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <button className="text-foreground hover:text-electric-purple font-medium">
                    {item.label}
                  </button>
                  {hovered === item.label && (
                    <div className="absolute left-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[200px]">
                      {item.dropdown.map((subItem) =>
                        subItem.onClick ? (
                          <button
                            key={subItem.label}
                            onClick={subItem.onClick}
                            className="w-full text-left flex items-center px-4 py-2 hover:bg-muted gap-2"
                          >
                            <subItem.icon className="w-4 h-4 text-electric-purple" />
                            {subItem.label}
                          </button>
                        ) : (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center px-4 py-2 hover:bg-muted gap-2"
                          >
                            <subItem.icon className="w-4 h-4 text-electric-purple" />
                            {subItem.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : item.onClick ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-foreground hover:text-electric-purple font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-electric-purple font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </div> */}

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu
                  key={item.label}
                  label={item.label}
                  items={item.dropdown}
                />
              ) : item.onClick ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-foreground hover:text-electric-purple font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-electric-purple font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

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
              {/* {menuItems.map((item) =>
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
              )} */}

              {menuItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="flex flex-col">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between space-x-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon && (
                          <item.icon className="w-5 h-5 text-electric-purple" />
                        )}
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-6 flex flex-col space-y-1">
                        {item.dropdown.map((subItem) =>
                          subItem.onClick ? (
                            <button
                              key={subItem.label}
                              onClick={() => {
                                subItem.onClick();
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              className="flex items-center space-x-2 px-2 py-2 text-left hover:bg-muted text-sm rounded-md"
                            >
                              <subItem.icon className="w-4 h-4 text-electric-purple" />
                              <span>{subItem.label}</span>
                            </button>
                          ) : (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center space-x-2 px-2 py-2 hover:bg-muted text-sm rounded-md"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <subItem.icon className="w-4 h-4 text-electric-purple" />
                              <span>{subItem.label}</span>
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : item.onClick ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.onClick();
                      setIsMenuOpen(false);
                    }}
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
                    onClick={() => setIsMenuOpen(false)}
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
