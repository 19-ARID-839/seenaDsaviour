import React from "react";
import AttendanceToggle from "@/components/internalUI/AttendanceToggle";

type Student = {
  id: string;
  name: string;
  rollNumber: string;
  avatarUrl?: string;
  isPresent: boolean;
};

type Props = {
  students: Student[];
  onToggle: (id: string) => void;
};

const AttendanceTable: React.FC<Props> = ({ students = [], onToggle }) => {
  return (
    <div className="overflow-auto rounded-xl border border-border shadow-sm overflow-auto">
      <table className="min-w-full table-auto text-left h-25">
        <thead className="bg-background from-blue-600 to-indigo-600 text-white">
          <tr>
            <th className="px-6 py-4">Student</th>
            <th className="px-6 py-4">Roll No</th>
            <th className="px-6 py-4 text-center">Attendance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-border bg-background scroll-y">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-green transition">
              <td className="px-6 py-4 flex items-center gap-4">
                {student.avatarUrl ? (
                  <img
                    src={student.avatarUrl}
                    alt={student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                    {student.name[0]}
                  </div>
                )}
                <span className="font-medium">{student.name}</span>
              </td>
              <td className="px-6 py-4">{student.rollNumber}</td>
              <td className="px-6 py-4 text-center">
                <AttendanceToggle
                  isPresent={student.isPresent}
                  onToggle={() => onToggle(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AttendanceTable;
