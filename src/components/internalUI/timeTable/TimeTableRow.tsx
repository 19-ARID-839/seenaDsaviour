import { TimeSlotCell } from "./TimeSlotCell";

type Slot = {
  subject: string;
  teacher: string;
  time: string;
};

type Props = {
  day: string;
  slots: Slot[];
};

export const TimeTableRow: React.FC<Props> = ({ day, slots }) => {
  return (
    <div className="grid grid-cols-7 gap-2 items-center">
      <div className="p-3 font-medium text-center bg-indigo-600 rounded-md">{day}</div>
      {slots.map((slot, idx) => (
        <TimeSlotCell key={idx} {...slot} />
      ))}
    </div>
  );
};
