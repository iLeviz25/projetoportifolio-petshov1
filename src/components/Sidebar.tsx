
import { PawPrint, Users, Bath, MessageSquare, Settings, Dog } from "lucide-react";

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

export const Sidebar = ({ activeSection, setActiveSection, isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
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
      <aside className={`
        fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:bg-[#181828]
        border-r border-gray-200 dark:border-gray-600 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600 lg:hidden">
          <h2 className="text-lg font-semibold text-purple-700 dark:text-[#f5f5f5]">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md text-purple-600 dark:text-[#a5b4fc] hover:bg-purple-50 dark:hover:bg-[#1f1f2b]"
          >
            <PawPrint className="w-5 h-5" />
          </button>
        </div>
        <nav className="mt-16 lg:mt-6 px-4">
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
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                      ${isActive 
                        ? 'bg-purple-100 dark:bg-[#252535] text-purple-900 dark:text-[#f5f5f5] font-semibold shadow-md border dark:border-[#7dd3fc]'
                        : 'text-purple-800 dark:text-[#e0e0e0] hover:bg-purple-50 dark:hover:bg-[#1f1f2b]'
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-purple-600 dark:text-[#7dd3fc]' : ''}`} />
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
