// components/SearchHistoryDropdown.tsx

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // adjust path as needed
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

const options = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "Last 30 days",
  "Last 60 days",
  "Last 90 days",
  "Last 180 days",
  "Last 365 days",
];

const SearchHistoryDropdown: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1">
          {selected}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onSelect={() => onSelect(option)}
            className="cursor-pointer"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SearchHistoryDropdown;
