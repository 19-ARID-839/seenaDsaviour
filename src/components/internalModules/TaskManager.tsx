import React from "react";
import {
  Calendar,
  BookOpen,
  Activity,
  GraduationCap,
  TrendingUp,
  Users,
  ChartNoAxesColumnIncreasing,
  Repeat2,
  CircleCheck,
  Ban,
  Mic,
  Plus,
  Book,
  BellOff,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CircularProgress from "../internalUI/CircularProgress";
import TaskList from "../internalUI/TaskList";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const progressCards = [
  {
    title: "Progress",
    titleIcon: <ChartNoAxesColumnIncreasing />,
    progress: 67,
    color: "text-green-500",
  },
  {
    title: "Task Pending",
    titleIcon: <Repeat2 />,
    progress: 45,
    color: "text-yellow-500",
  },
  {
    title: "Task Complete",
    titleIcon: <Ban />,
    progress: 80,
    color: "text-blue-500",
  },
  {
    title: "Project Approval",
    titleIcon: <CircleCheck />,
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

const assignment = [
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
    title: "Frontend Development",
    progress: 75,
    status: "Completed",
    priority: "Medium",
    approved: true,
    date: "2023-10-04",
  },
  {
    id: "3",
    title: "Database Design",
    progress: 85,
    status: "Completed",
    priority: "Low",
    approved: true,
    date: "2023-10-05",
  },
];

const TaskManager = () => {
  //   const [tasks, setTasks] = useState([]);

  //   const addTask = (task) => {
  //     setTasks([...tasks, task]);
  //   };

  return (
    <div className="space-y-3">
      <h2 className="bg-gradient-primary bg-clip-text text-transparent hover-colorchange text-4xl md:text-6xl lg:text-4xl text-center">
        Task Manager
      </h2>
      <div className="w-full flex flex-col lg:flex-row p-2 rounded-lg gap-4">
        <div className="w-full lg:w-4/5 flex flex-col  p-3 rounded-lg gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border rounded-lg p-3">
            {progressCards.map((card, index) => (
              <Card key={index}>
                <CardHeader className="bg-violet-600 text-white text-sm py-2 px-4 rounded-t-xl">
                  <CardTitle className="flex flex-row justify-between text-sm">
                    {card.title}
                    {card.titleIcon}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6">
                  <CircularProgress
                    progress={card.progress}
                    color={card.color}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <TaskList tasks={sampleTasks} />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="w-full lg:w-1/5 flex flex-col lg:flex-row p-3 rounded-lg gap-4">
          <Card className="w-full">
            <CardHeader className="bg-violet-600 text-white text-sm py-2 px-4 rounded-t-xl p-4">
              <CardTitle className="flex flex-row justify-between text-sm">
                Assignments <Book />
              </CardTitle>
            </CardHeader>

           <CardContent className="p-6 flex flex-col items-center justify-center text-lg font-semibold text-center gap-4">
  <div>
    <BellOff className="bg-muted/50 p-5 w-20 h-20 rounded-full text-purple-600" />
  </div>
  <h2 className="bg-gradient-primary bg-clip-text text-transparent text-base">
    You are all caught up
  </h2>
  <p className="bg-gradient-primary bg-clip-text text-transparent text-sm">
    Come back later for reminders, news and alerts. More over to fun
    and weight notifications.
  </p>
</CardContent>

          </Card>
        </div>
      </div>
      <div>
        <div className="w-full p-4">
          <div className="relative bg-white dark:bg-muted shadow-md rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Plus className="w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Ask me anything & track your improvement record here!"
                className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
              />
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <Mic />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
