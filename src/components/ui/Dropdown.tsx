// components/DropdownMenu.tsx
import React, { useState, useRef } from "react";

type DropdownItem = {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ElementType;
};

type DropdownMenuProps = {
  label: string;
  items: DropdownItem[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // delay to allow cursor to move between button and menu
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-foreground hover:text-electric-purple font-medium">
        {label}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[200px]">
          {items.map((item) =>
            item.onClick ? (
              <button
                key={item.label}
                onClick={item.onClick}
                className="w-full text-left flex items-center px-4 py-2 hover:bg-muted gap-2"
              >
                {item.icon && <item.icon className="w-4 h-4 text-electric-purple" />}
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-4 py-2 hover:bg-muted gap-2"
              >
                {item.icon && <item.icon className="w-4 h-4 text-electric-purple" />}
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
