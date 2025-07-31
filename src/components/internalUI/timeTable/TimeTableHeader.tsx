const periods = ["08:00", "09:00", "10:00", "11:00", "12:00", "01:00"];

export const TimeTableHeader = () => {
  return (
    <div className="grid grid-cols-7 gap-2 font-bold text-center bg-indigo-600 text-white rounded-t-lg">
      <div className="p-3">Day</div>
      {periods.map((period) => (
        <div key={period} className="p-3 border-l border-white">
          {period}
        </div>
      ))}
    </div>
  );
};
