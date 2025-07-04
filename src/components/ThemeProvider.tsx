
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getPreferredTheme = (): Theme => {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    }
    return "light";
  };

  const [theme, setThemeState] = useState<Theme>(getPreferredTheme);

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement;
    
    // Remove ambas as classes primeiro
    html.classList.remove("dark", "light");
    
    // Adiciona a nova classe imediatamente
    html.classList.add(newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to system preference changes
  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setThemeState(e.matches ? "dark" : "light");
      }
    };
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", listener);
    
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const setTheme = (theme: Theme) => setThemeState(theme);
  const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
