
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white dark:bg-[#121212] transition-colors">
      <aside className="w-[240px] bg-gradient-to-b from-[#f8f8fa] to-[#f0f0f5] dark:from-[#181828] dark:to-[#1a1a2e] border-r border-[#eaeaec] dark:border-[#23233b]">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </aside>

      <div className="flex-1 flex flex-col max-w-[1280px] mx-auto w-full px-8 py-6">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="mt-4">
          {children}
        </main>
      </div>
    </div>
  );
};
