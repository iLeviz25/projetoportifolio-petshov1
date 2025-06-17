
import { PawPrint, Users, Bath, MessageSquare, Settings, Dog } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const menuItems = [
  { id: "overview", label: "Visão Geral", icon: PawPrint },
  { id: "clients", label: "Clientes (Tutores)", icon: Users },
  { id: "appointments", label: "Agendamentos", icon: Bath },
  { id: "pets", label: "Pets Cadastrados", icon: Dog },
  { id: "messages", label: "Mensagens", icon: MessageSquare },
  { id: "settings", label: "Configurações", icon: Settings },
];

export const Sidebar = ({
  activeSection,
  setActiveSection,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) => {
  const { theme } = useTheme();

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 w-64 h-full
          ${theme === "dark" 
            ? "bg-gradient-to-b from-[#181828] to-[#1a1a2e] text-[#dddddd] border-r border-[#23233b]" 
            : "bg-gradient-to-b from-[#f8f8fa] to-[#f0f0f5] text-[#444444] border-r border-[#eaeaec]"}
          transition-transform duration-300 ease-in-out
          pt-20 px-6 py-4
          rounded-tr-2xl rounded-br-2xl
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
        style={{ 
          boxShadow: theme === "dark" 
            ? '4px 0 20px rgba(0,0,0,0.3)' 
            : '4px 0 20px rgba(25,25,34,0.1)' 
        }}
      >
        <nav>
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-200 text-base
                      font-medium
                      ${isActive
                        ? (theme === "dark"
                          ? "bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] text-white font-semibold shadow-lg transform scale-105"
                          : "bg-gradient-to-r from-[#ede9fe] to-[#ddd6fe] text-[#4c1d95] font-semibold shadow-md transform scale-105")
                        : (theme === "dark"
                          ? "text-[#dddddd] hover:bg-[#23233b] hover:text-[#a78bfa]"
                          : "text-[#444444] hover:bg-[#ede9fe] hover:text-[#4c1d95]")}
                    `}
                    style={isActive ? { 
                      boxShadow: theme === "dark" 
                        ? '0 4px 15px rgba(76,29,149,0.3)' 
                        : '0 4px 15px rgba(237,233,254,0.5)' 
                    } : {}}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? (theme==="dark"?"text-white":"text-[#4c1d95]") : (theme==="dark"?"text-[#a78bfa]":"text-[#4c1d95]")}`} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};
