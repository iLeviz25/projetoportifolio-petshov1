
import { useState } from "react";
import { Overview } from "@/components/Overview";
import { Clients } from "@/components/Clients";
import { Messages } from "@/components/Messages";
import { Appointments } from "@/components/Appointments";
import { Pets } from "@/components/Pets";
import { Settings } from "@/components/Settings";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DashboardLayout } from "@/components/DashboardLayout";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

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

  // Função para exibir o toast do botão ver versão desktop
  const showDesktopToast = () =>
    toast({
      title: "Essa é uma visualização responsiva",
      description: "Altere o tamanho da janela para ver o modo desktop ou utilize um computador.",
      duration: 2500,
    });

  return (
    <ThemeProvider>
      <DashboardLayout>
        {renderContent()}
        {/* Botão fixo para apenas mobile */}
        <button
          onClick={showDesktopToast}
          className="fixed z-40 bottom-5 right-4 px-4 py-3 rounded-full shadow-lg bg-[#ede9fe] dark:bg-[#4c1d95] text-[#4c1d95] dark:text-white text-base font-semibold transition-all active:scale-95 md:hidden"
        >
          Ver versão Desktop
        </button>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default Index;
