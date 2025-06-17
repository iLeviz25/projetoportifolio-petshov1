
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
      {/* Sidebar - Hidden on mobile, overlay when open */}
      <aside className="hidden lg:block w-[240px] bg-gradient-to-b from-[#f8f8fa] to-[#f0f0f5] dark:from-[#181828] dark:to-[#1a1a2e] border-r border-[#eaeaec] dark:border-[#23233b]">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </aside>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-[240px] bg-gradient-to-b from-[#f8f8fa] to-[#f0f0f5] dark:from-[#181828] dark:to-[#1a1a2e] border-r border-[#eaeaec] dark:border-[#23233b]">
            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col w-full min-w-0">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="mt-16 lg:mt-20 px-4 py-4 max-w-[1200px] mx-auto w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
