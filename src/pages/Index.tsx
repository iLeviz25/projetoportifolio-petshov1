
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Overview } from "@/components/Overview";
import { Clients } from "@/components/Clients";
import { Messages } from "@/components/Messages";
import { Appointments } from "@/components/Appointments"; // FIXED HERE
import { Pets } from "@/components/Pets";
import { Settings } from "@/components/Settings";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "clients":
        return <Clients />;
      case "appointments":
        return <Appointments />;
      case "pets":
        return <Pets />;
      case "messages":
        return <Messages />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-[#121212] dark:bg-[#121212] dark:text-white transition-colors">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <main className="flex-1 p-6 lg:ml-64 mt-16 transition-all duration-300">
            {renderContent()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
