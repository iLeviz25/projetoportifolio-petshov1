
import { PawPrint, Sun, Moon, Bell } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export const Header = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#202030] border-b border-gray-200 dark:border-[#252535] shadow-md transition-colors duration-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-md text-[#a78bfa] hover:bg-[#eee] dark:hover:bg-[#262636] transition-colors"
            aria-label="Abrir menu"
          >
            <PawPrint className="w-7 h-7" />
          </button>
          <h1 className="text-xl font-bold ml-2 lg:ml-0 flex items-center gap-2 text-[#121212] dark:text-white">
            <PawPrint className="w-7 h-7 inline-block text-[#c084fc]" />
            Painel PetShop
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-[#a78bfa] hover:bg-[#eee] dark:hover:bg-[#262636] transition-colors"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="relative">
            <button className="p-2 rounded-md text-[#c084fc] hover:bg-[#eee] dark:hover:bg-[#262636] transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute -top-1 -right-1 bg-[#c084fc] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              2
            </span>
          </div>
          <button className="flex items-center space-x-2 p-2 rounded-full bg-[#eee] dark:bg-[#2c2c3a] text-[#121212] dark:text-white hover:bg-slate-200 dark:hover:bg-[#33334d] border border-[#c084fc] transition-colors">
            <PawPrint className="w-5 h-5" />
            <span className="hidden sm:block text-sm font-medium">Pet Admin</span>
          </button>
          <button
            onClick={handleLogout}
            className="ml-2 px-4 py-2 rounded-full bg-[#c084fc] text-white font-semibold text-sm hover:bg-[#a78bfa] transition-colors"
            type="button"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};

