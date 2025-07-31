import Header from "@/components/internalUI/Header";
import MobileDrawer from "@/components/internalUI/MobileDrawer";
import Sidebar from "@/components/internalUI/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import { Outlet } from "react-router-dom";

const InternalModuleLayout = () => {
  const isMobile = useIsMobile();


  return (
    <div className="h-screen w-auto flex overflow-hidden">
      {/* <Sidebar /> */}
      {isMobile ? <MobileDrawer /> : <Sidebar />}
      <div className="flex-1 flex flex-col h-full w-80">
        {/* Shared Header */}
        <Header />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-3 bg-background h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InternalModuleLayout;
