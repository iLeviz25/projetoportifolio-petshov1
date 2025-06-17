
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
    <div className="h-full flex flex-col pt-20 px-4 py-4">
      <nav className="flex-1">
        <ul className="flex flex-col gap-1">
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
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 text-sm
                    font-medium
                    ${isActive
                      ? (theme === "dark"
                        ? "bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] text-white font-semibold shadow-lg"
                        : "bg-gradient-to-r from-[#ede9fe] to-[#ddd6fe] text-[#4c1d95] font-semibold shadow-md")
                      : (theme === "dark"
                        ? "text-[#dddddd] hover:bg-[#23233b] hover:text-[#a78bfa]"
                        : "text-[#444444] hover:bg-[#ede9fe] hover:text-[#4c1d95]")}
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? (theme==="dark"?"text-white":"text-[#4c1d95]") : (theme==="dark"?"text-[#a78bfa]":"text-[#4c1d95]")}`} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
