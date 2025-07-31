import React from "react";
import AttendanceToggle from "@/components/internalUI/AttendanceToggle";

type Column<T> = {
  title: string;
  render: (row: T) => React.ReactNode;
  className?: string;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
};

const AttendanceTable = <T,>({
  data,
  columns,
  onRowClick,
  tableClassName = "min-w-full table-auto text-left",
  headerClassName = "bg-background text-foreground",
  rowClassName = "hover:bg-muted transition",
}: Props<T>) => {
  return (
    <div className="overflow-auto rounded-xl border border-border shadow-sm">
      <table className={tableClassName}>
        <thead className={headerClassName}>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className={`px-6 py-4 ${col.className ?? ""}`}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-background">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowClassName}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className={`px-6 py-4 ${col.className ?? ""}`}>
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
