import React from "react";
import {
  Calendar,
  BookOpen,
  Activity,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import CircularProgress from "../internalUI/CircularProgress";
import TaskList from "../internalUI/TaskList";


const progressCards = [
  {
    title: "Course Completion",
    progress: 67,
    color: "text-green-500",
  },
  {
    title: "Assignment Submission",
    progress: 45,
    color: "text-yellow-500",
  },
  {
    title: "Attendance Rate",
    progress: 80,
    color: "text-blue-500",
  },
  {
    title: "Exam Preparation",
    progress: 90,
    color: "text-purple-500",
  },
];

const sampleTasks: {
  id: string;
  title: string;
  progress: number;
  status: "In Progress" | "Delayed" | "Completed";
  priority: string;
  approved: boolean;
    date?: string; // Optional date field
}[] = [
  {
    id: "1",
    title: "Design Dashboard",
    progress: 90,
    status: "Completed",
    priority: "High",
    approved: true,
    date: "2023-10-01",
  },
  {
    id: "2",
    title: "Backend Integration",
    progress: 45,
    status: "In Progress",
    priority: "Medium",
    approved: false,
    date: "2023-10-02",
  },
  {
    id: "3",
    title: "User Testing",
    progress: 10,
    status: "Delayed",
    priority: "High",
    approved: false,
    date: "2023-10-03",
  },
];




const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

  return (
    <div className="space-y-6">
      <h2 className="bg-gradient-primary bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl text-center">
        Task Manager
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {progressCards.map((card, index) => (
            
          <Card key={index}>
            <CardContent className="p-6"> 
            <CircularProgress
              progress={card.progress}
              title={card.title}
              color={card.color}
            />
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="bg-gradient-primary bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl text-center">
        Task List
      </h2>
      <Card className="shadow-md">
        <CardContent className="p-6">
        <TaskList tasks={sampleTasks} />
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default TaskManager;
