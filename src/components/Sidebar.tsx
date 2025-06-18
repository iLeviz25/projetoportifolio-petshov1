
import { PawPrint, Users, Bath, MessageSquare, Settings, Dog } from "lucide-react";
import { useCallback, useMemo, memo } from "react";

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

export const Sidebar = memo(({
  activeSection,
  setActiveSection,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) => {
  const handleItemClick = useCallback((itemId: string) => {
    setActiveSection(itemId);
    setIsSidebarOpen(false);
  }, [setActiveSection, setIsSidebarOpen]);

  const menuItemsRendered = useMemo(() => {
    return menuItems.map((item) => {
      const Icon = item.icon;
      const isActive = activeSection === item.id;
      return (
        <li key={item.id}>
          <button
            onClick={() => handleItemClick(item.id)}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 text-sm
              font-medium
              ${isActive
                ? "bg-gradient-to-r from-[#ede9fe] to-[#ddd6fe] dark:from-[#4c1d95] dark:to-[#5b21b6] text-[#4c1d95] dark:text-white font-semibold shadow-lg"
                : "text-[#444444] dark:text-[#dddddd] hover:bg-[#ede9fe] dark:hover:bg-[#23233b] hover:text-[#4c1d95] dark:hover:text-[#a78bfa]"}
            `}
          >
            <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-[#4c1d95] dark:text-white" : "text-[#4c1d95] dark:text-[#a78bfa]"}`} />
            <span>{item.label}</span>
          </button>
        </li>
      );
    });
  }, [activeSection, handleItemClick]);

  return (
    <div className="h-full flex flex-col pt-20 px-4 py-4 transition-all duration-300 ease-in-out">
      <nav className="flex-1">
        <ul className="flex flex-col gap-1">
          {menuItemsRendered}
        </ul>
      </nav>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
