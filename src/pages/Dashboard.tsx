import DashboardLayout from "@/components/DashboardLayout";
import DashboardOverview from "@/components/DashboardOverview";

const Dashboard = () => {
  return (
    <div className="h-screen w-full flex overflow-auto">
      <DashboardLayout>
        <DashboardOverview />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
