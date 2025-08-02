import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  progress: number; // 0 to 100
  status: "Delayed" | "Completed" | "In Progress";
  priority: "High" | "Medium" | "Low";
  approved: boolean;
  date?: string;
}

interface TaskListProps {
  tasks: Task[];
}

const priorityColors: Record<Task["priority"], string> = {
  High: "bg-red-500 text-white",
  Medium: "bg-yellow-500 text-white",
  Low: "bg-green-500 text-white",
};

const statusColors: Record<Task["status"], string> = {
  Delayed: "text-red-600",
  Completed: "text-green-600",
  "In Progress": "text-blue-600",
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="max-h-[500px] overflow-auto rounded-xl border shadow-sm">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Approved</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell className={cn("text-sm", statusColors[task.status])}>
                {task.status}
              </TableCell>
              <TableCell>
                <span
                  className={cn(
                    "text-xs font-semibold px-2 py-1 rounded-full",
                    priorityColors[task.priority]
                  )}
                >
                  {task.priority}
                </span>
              </TableCell>
              <TableCell className="w-[150px]">
                <div className="w-full bg-muted-foreground/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${task.progress}%`,
                      backgroundColor:
                        task.status === "Completed"
                          ? "#16a34a"
                          : task.status === "Delayed"
                          ? "#dc2626"
                          : "#3b82f6",
                    }}
                  />
                </div>
                <div className="text-[10px] text-right mt-1 text-muted-foreground">
                  {task.progress}%
                </div>
              </TableCell>
              <TableCell>
                {task.approved ? (
                  <span className="text-green-500 text-sm font-medium">
                    ✅ Yes
                  </span>
                ) : (
                  <span className="text-gray-400 text-sm">❌ No</span>
                )}
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {task.date || "--"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TaskList;
