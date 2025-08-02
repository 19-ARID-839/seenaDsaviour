import { Route } from "react-router-dom";
import InternalModuleLayout from "@/pages/InternalModuleLayout";
import DashboardOverview from "@/components/DashboardOverview";
import TaskManager from "@/components/internalModules/TaskManager";
import Attendance from "@/components/internalModules/Attendance";
import TimeTable from "@/components/internalModules/TimeTable";
import FeeManager from "@/components/internalModules/FeeManager";
import ExamPortal from "@/components/internalModules/Exam";

const InternalRoutes = (
  <Route path="/dashboard" element={<InternalModuleLayout />}>
    <Route index element={<DashboardOverview />} />
    <Route path="task-manager" element={<TaskManager />} />
    <Route path="attendance" element={<Attendance />} />
    <Route path="time-table" element={<TimeTable/>}/>
    <Route path="fee-manager" element={<FeeManager/>}/>
    <Route path="exam-portal" element={<ExamPortal/>}/>
  </Route>
);

export default InternalRoutes;
