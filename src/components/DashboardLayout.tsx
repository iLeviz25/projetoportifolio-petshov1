
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const DashboardLayout = ({ children, activeSection, setActiveSection }: DashboardLayoutProps) => {
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

      <div className="flex-1 flex flex-col w-full">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="mt-20 px-4 py-4 max-w-[1200px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};
