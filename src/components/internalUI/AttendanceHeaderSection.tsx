import { useState } from "react";
import { CalendarDays, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Dropdown from "../ui/Dropdown";
import SearchHistoryDropdown from "./SearchHistoryDropdown";
import { Card } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const AttendanceHeaderSection = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchHistory, setSearchHistory] = useState("Today");
  const [leaveReason, setLeaveReason] = useState("");
  const [leaveDuration, setLeaveDuration] = useState("");

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
      <Card className="p-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center gap-4">
            <div className="text-6xl font-bold text-purple-700">{day}</div>
            <div className="text-white-700">
              <div className="text-xl font-semibold">{dayOfWeek}</div>
              <div className="text-md">{monthYear}</div>
            </div>
          </div>

          

          {/* Week Progress Circles */}
          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <h2>This Week's Progress</h2>
            <div className="flex flex-row justify-center gap-4">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs ${
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
        </div>
      </Card>

      {/* Leave Request Section */}
      <Card className="p-5">
        <h3 className="text-lg font-semibold mb-4">Leave Request</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select onValueChange={setLeaveReason} value={leaveReason}>
            <SelectTrigger>
              <SelectValue placeholder="Select Reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sick">Sick</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="vacation">Vacation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setLeaveDuration} value={leaveDuration}>
            <SelectTrigger>
              <SelectValue placeholder="Select Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="half-day">Half Day</SelectItem>
              <SelectItem value="full-day">Full Day</SelectItem>
              <SelectItem value="multiple">Multiple Days</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-purple-600 hover:bg-purple-700">Generate</Button>
          <Button variant="outline">Preview</Button>
        </div>
      </Card>

      {/* Search Section */}
      <Card className="p-5">
        <div className="flex flex-col md:flex-row justify-between gap-4">
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
            <SearchHistoryDropdown
              selected={searchHistory}
              onSelect={(value) => setSearchHistory(value)}
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex gap-2 flex-wrap">
            {[
              { label: "All", color: "bg-gray-400" },
              { label: "Present", color: "bg-green-500" },
              { label: "Absent", color: "bg-red-500" },
              { label: "Late", color: "bg-yellow-400" },
            ].map((status) => (
              <Button
                key={status.label}
                variant={selectedStatus === status.label ? "purple" : "outline"}
                onClick={() => setSelectedStatus(status.label)}
                className="flex items-center gap-2 px-4 py-2 text-sm"
              >
                <span className={`w-3 h-3 rounded-full ${status.color}`}></span>
                {status.label}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AttendanceHeaderSection;
