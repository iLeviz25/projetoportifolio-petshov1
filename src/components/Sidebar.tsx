
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
          ${theme === "dark" ? "bg-[#181828] text-[#dddddd] border-r border-[#23233b]" : "bg-[#f8f8fa] text-[#444444] border-r border-[#eaeaec]"}
          transition-transform duration-300 ease-in-out
          pt-20
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
        style={{ boxShadow: '0 1px 8px rgba(25,25,34,0.10)' }}
      >
        <nav className="px-4">
          <ul className="space-y-2">
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
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-lg
                      font-medium
                      ${isActive
                        ? (theme === "dark"
                          ? "bg-[#4c1d95] text-white font-bold shadow-lg"
                          : "bg-[#ede9fe] text-[#4c1d95] font-bold shadow")
                        : (theme === "dark"
                          ? "text-[#dddddd] hover:bg-[#23233b]"
                          : "text-[#444444] hover:bg-[#ede9fe] hover:text-[#4c1d95]")}
                    `}
                    style={isActive ? { boxShadow: theme === "dark" ? '0 0 10px rgba(76,29,149,0.12)' : '0 0 8px #ede9fe' } : {}}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? (theme==="dark"?"text-white":"text-[#4c1d95]") : (theme==="dark"?"text-[#a78bfa]":"text-[#4c1d95]")}`} />
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
