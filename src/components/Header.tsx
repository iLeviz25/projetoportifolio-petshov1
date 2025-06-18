
import { PawPrint, Sun, Moon, Bell, Menu } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useAuth } from "@/context/AuthContext";
import { useCallback, memo } from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export const Header = memo(({
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen, setIsSidebarOpen]);

  const handleThemeToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-[#202030] border-b border-gray-200 dark:border-[#252535] shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between px-4 lg:px-6 py-3">
        <div className="flex items-center">
          <button
            onClick={handleSidebarToggle}
            className="lg:hidden p-2 rounded-md text-[#a78bfa] hover:bg-[#eee] dark:hover:bg-[#262636] transition-all duration-200 mr-2"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold flex items-center gap-2 text-[#121212] dark:text-white transition-colors duration-300">
            <PawPrint className="w-6 h-6 text-[#c084fc]" />
            <span className="hidden sm:block">Painel PetShop</span>
            <span className="sm:hidden">PetShop</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-md text-[#a78bfa] hover:bg-[#eee] dark:hover:bg-[#262636] transition-all duration-200"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="relative">
            <button className="p-2 rounded-md text-[#c084fc] hover:bg-[#eee] dark:hover:bg-[#262636] transition-all duration-200">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute -top-1 -right-1 bg-[#c084fc] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              2
            </span>
          </div>
          <button className="hidden sm:flex items-center gap-2 p-2 rounded-full bg-[#eee] dark:bg-[#2c2c3a] text-[#121212] dark:text-white hover:bg-slate-200 dark:hover:bg-[#33334d] border border-[#c084fc] transition-all duration-200">
            <PawPrint className="w-4 h-4" />
            <span className="text-sm font-medium">Pet Admin</span>
          </button>
          <button
            onClick={handleLogout}
            className="px-3 lg:px-4 py-2 rounded-full bg-[#c084fc] text-white font-semibold text-sm hover:bg-[#a78bfa] transition-all duration-200"
            type="button"
          >
            <span className="hidden sm:block">Sair</span>
            <span className="sm:hidden">⏻</span>
          </button>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
