import { useState } from "react";
import { CalendarDays, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Dropdown from "../ui/Dropdown";
import SearchHistoryDropdown from "./SearchHistoryDropdown";

const AttendanceHeaderSection = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchHistory, setSearchHistory] = useState("Today");

  const today = new Date();
  const day = today.getDate();
  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });
  const monthYear = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekDays = ["M", "T", "W", "T", "F", "S"];

  return (
    <div className="space-y-6">
      {/* Date Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center gap-4">
          <div className="text-6xl font-bold text-purple-700">{day}</div>
          <div className="text-white-700">
            <div className="text-xl font-semibold">{dayOfWeek}</div>
            <div className="text-md">{monthYear}</div>
          </div>
        </div>

        {/* Week Progress Circles */}
        <div className="flex gap-2 mt-4 md:mt-0">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                index < 3
                  ? "bg-green-500 text-white border-green-500"
                  : "text-gray-500"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 items-start md:items-center">
        {/* Status Filter Buttons */}
        <div className="flex gap-2">
          {[
            { label: "Short", color: "bg-red-500" },
            { label: "Regular", color: "bg-green-500" },
            { label: "Irregular", color: "bg-yellow-400" },
          ].map((status) => (
            <Button
              key={status.label}
              variant={selectedStatus === status.label ? "default" : "outline"}
              onClick={() => setSelectedStatus(status.label)}
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <span className={`w-3 h-3 rounded-full ${status.color}`}></span>{" "}
              {status.label}
            </Button>
          ))}
        </div>

        {/* Search and Dropdown */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-72">
            <Input
              type="text"
              placeholder="Search name or roll no"
              className="pl-10"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
          {/* <Button variant="outline" className="flex items-center gap-1 px-4">
            Value <ChevronDown size={16} />
          </Button> */}

          <SearchHistoryDropdown
            selected={searchHistory}
            onSelect={(value) => {
              setSearchHistory(value);
              // optionally trigger filtering logic here
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AttendanceHeaderSection;
