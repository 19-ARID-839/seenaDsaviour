import React from "react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  progress: number; // 0 to 100
  status: "Delayed" | "Completed" | "In Progress";
  priority: "High" | "Medium" | "Low";
  approved: boolean;
    date?: string; // Optional date field
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
  "Delayed": "text-red-600",
  "Completed": "text-green-600",
  "In Progress": "text-blue-600",
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="max-h-[400px] overflow-y-auto p-4 space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 bg-card border border-border rounded-xl shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">{task.title}</h3>
            <span
              className={cn(
                "px-2 py-1 text-xs rounded-full",
                priorityColors[task.priority]
              )}
            >
              {task.priority}
            </span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className={cn("text-xs", statusColors[task.status])}>
              {task.status}
            </span>
            {task.approved && (
              <span className="text-xs text-green-500 font-semibold">
                ✅ Approved
              </span>
            )}
          </div>

          <div className="w-full bg-muted-foreground/10 rounded-full h-2 mt-3">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: `${task.progress}%`,
                backgroundColor:
                  task.status === "Completed"
                    ? "#16a34a" // green
                    : task.status === "Delayed"
                    ? "#dc2626" // red
                    : "#3b82f6", // blue
              }}
            />
          </div>

          <div className="text-right text-[10px] mt-1 text-muted-foreground">
            {task.progress}% done
          </div>
           <div className="text-right text-[10px] mt-1 text-muted-foreground">
            {task.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
