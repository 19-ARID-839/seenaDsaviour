import React from "react";

type Props = {
  subject: string;
  teacher: string;
  time: string;
};

export const TimeSlotCell: React.FC<Props> = ({ subject, teacher, time }) => {
  return (
    <div className="p-2 rounded-lg bg-indigo-600 text-sm text-center shadow-sm">
      <div className="font-semibold">{subject}</div>
      <div className="text-xs">{teacher}</div>
      <div className="text-xs">{time}</div>
    </div>
  );
};
