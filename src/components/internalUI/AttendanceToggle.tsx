import React from "react";

type Props = {
  isPresent: boolean;
  onToggle: () => void;
};

const AttendanceToggle: React.FC<Props> = ({ isPresent, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-24 px-3 py-1 rounded-full text-sm font-medium transition duration-200 ${
        isPresent
          ? "bg-green-100 text-green-800 hover:bg-green-200"
          : "bg-red-100 text-red-800 hover:bg-red-200"
      }`}
    >
      {isPresent ? "Present" : "Absent"}
    </button>
  );
};

export default AttendanceToggle;
