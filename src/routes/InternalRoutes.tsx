import { Route } from "react-router-dom";
import InternalModuleLayout from "@/pages/InternalModuleLayout";
import DashboardOverview from "@/components/DashboardOverview";
import TaskManager from "@/components/internalModules/TaskManager";
import Attendance from "@/components/internalModules/Attendance";

const InternalRoutes = (
  <Route path="/dashboard" element={<InternalModuleLayout />}>
    <Route index element={<DashboardOverview />} />
    <Route path="task-manager" element={<TaskManager />} />
    <Route path="attendance" element={<Attendance />} />
  </Route>
);

export default InternalRoutes;
