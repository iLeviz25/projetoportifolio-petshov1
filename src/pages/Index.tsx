
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Overview } from "@/components/Overview";
import { Clients } from "@/components/Clients";
import { Messages } from "@/components/Messages";
import { Orders as Appointments } from "@/components/Appointments";
import { Pets } from "@/components/Pets";
import { Settings } from "@/components/Settings";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isDarkMode, setIsDarkMode] = useState(true);
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
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-pink-100 to-green-100 dark:bg-gray-900 transition-colors duration-200">
        <Header 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
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
    </div>
  );
};

export default Index;
