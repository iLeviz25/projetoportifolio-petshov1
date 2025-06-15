
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
        fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-br from-blue-100 via-pink-50 to-green-100 dark:from-slate-900 dark:via-pink-900 dark:to-teal-950
        border-r border-gray-200 dark:border-gray-700 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 lg:hidden">
          <h2 className="text-lg font-semibold text-pink-700 dark:text-pink-200">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md text-teal-600 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-teal-900"
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
                        ? 'bg-pink-200 dark:bg-pink-900 text-pink-900 dark:text-pink-200 font-semibold shadow-md'
                        : 'text-teal-800 dark:text-pink-100 hover:bg-pink-100 dark:hover:bg-pink-950'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
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
