
import { PawPrint, Sun, Moon, Bell } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export const Header = ({ isDarkMode, setIsDarkMode, isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-700 dark:shadow-lg transition-colors duration-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-md text-purple-600 dark:text-[#ffffff] hover:bg-purple-50 dark:hover:bg-[#2c2c3a] transition-colors"
            aria-label="Abrir menu"
          >
            <PawPrint className="w-7 h-7" />
          </button>
          <h1 className="text-xl font-bold text-purple-700 dark:text-[#ffffff] ml-2 lg:ml-0 flex items-center gap-2">
            <PawPrint className="w-7 h-7 inline-block text-purple-500 dark:text-[#a78bfa]" />
            Painel PetShop
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-md text-purple-600 dark:text-[#ffffff] hover:bg-purple-50 dark:hover:bg-[#2c2c3a] transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="relative">
            <button className="p-2 rounded-md text-purple-600 dark:text-[#ffffff] hover:bg-purple-50 dark:hover:bg-[#2c2c3a] transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute -top-1 -right-1 bg-purple-500 dark:bg-[#c084fc] text-white dark:text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
          <button className="flex items-center space-x-2 p-2 rounded-full bg-purple-100 dark:bg-[#2c2c3a] text-purple-900 dark:text-[#ffffff] hover:bg-purple-200 dark:hover:bg-[#33334d] dark:hover:border dark:hover:border-[#c084fc] transition-colors">
            <PawPrint className="w-5 h-5" />
            <span className="hidden sm:block text-sm font-medium">Pet Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};
