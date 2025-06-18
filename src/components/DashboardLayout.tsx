
import { ReactNode, useState, useCallback, memo } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

interface DashboardLayoutProps {
  children: ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const DashboardLayout = memo(({ children, activeSection, setActiveSection }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = useCallback((value: boolean) => {
    setIsSidebarOpen(value);
  }, []);

  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  }, [setActiveSection]);

  return (
    <div className="flex h-screen bg-white dark:bg-[#121212] transition-all duration-300 ease-in-out">
      {/* Sidebar - Hidden on mobile, overlay when open */}
      <aside className="hidden lg:block w-[240px] bg-gradient-to-b from-[#f8f8fa] to-[#f0f0f5] dark:from-[#181828] dark:to-[#1a1a2e] border-r border-[#eaeaec] dark:border-[#23233b] transition-all duration-300 ease-in-out">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={handleSidebarToggle}
        />
      </aside>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out" 
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-[240px] bg-gradient-to-b from-[#f8f8fa] to-[#f0f0f5] dark:from-[#181828] dark:to-[#1a1a2e] border-r border-[#eaeaec] dark:border-[#23233b] transition-all duration-300 ease-in-out transform">
            <Sidebar
              activeSection={activeSection}
              setActiveSection={handleSectionChange}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={handleSidebarToggle}
            />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col w-full min-w-0">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={handleSidebarToggle}
        />
        <main className="mt-16 lg:mt-20 px-4 py-4 max-w-[1200px] mx-auto w-full overflow-x-hidden bg-white dark:bg-[#121212] transition-all duration-300 ease-in-out">
          <div className="transition-all duration-300 ease-in-out">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
});

DashboardLayout.displayName = "DashboardLayout";
