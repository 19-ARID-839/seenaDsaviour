import React from "react";
import { TimeTableHeader } from "@/components/internalUI/timeTable/TimeTableHeader";
import { TimeTableRow } from "@/components/internalUI/timeTable/TimeTableRow";

const timetable = [
  {
    day: "Monday",
    slots: [
      { subject: "Math", teacher: "Mr. A", time: "08:00-09:00" },
      { subject: "English", teacher: "Ms. B", time: "09:00-10:00" },
      { subject: "Physics", teacher: "Mr. C", time: "10:00-11:00" },
      { subject: "Break", teacher: "", time: "11:00-12:00" },
      { subject: "Chemistry", teacher: "Ms. D", time: "12:00-01:00" },
      { subject: "Biology", teacher: "Mr. E", time: "01:00-02:00" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { subject: "Urdu", teacher: "Ms. F", time: "08:00-09:00" },
      { subject: "Math", teacher: "Mr. A", time: "09:00-10:00" },
      { subject: "English", teacher: "Ms. B", time: "10:00-11:00" },
      { subject: "Break", teacher: "", time: "11:00-12:00" },
      { subject: "Computer", teacher: "Mr. Z", time: "12:00-01:00" },
      { subject: "Physics", teacher: "Mr. C", time: "01:00-02:00" },
    ],
  },
  // ... add for other days
];

const TimeTable = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Class Time Table</h1>
      <TimeTableHeader />
      <div className="space-y-2">
        {timetable.map((entry) => (
          <TimeTableRow key={entry.day} day={entry.day} slots={entry.slots} />
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
