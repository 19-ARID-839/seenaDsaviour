import Header from "@/components/internalUI/Header";
import Sidebar from "@/components/internalUI/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const InternalModuleLayout = () => {
  return (
    <div className="h-screen w-auto flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full">
        {/* Shared Header */}
        <Header />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-background h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InternalModuleLayout;
