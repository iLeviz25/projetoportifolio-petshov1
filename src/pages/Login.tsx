
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";
import { Sun, Moon } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Theme state using localStorage (browser)
  const getPreferredTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    }
    return "light";
  };
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme);

  useEffect(() => {
    // Aplica no html (root)
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast({ title: "Login bem-sucedido!", description: "Bem-vindo ao Painel PetShop." });
    setTimeout(() => {
      login();
      setLoading(false);
      navigate("/dashboard", { replace: true });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#121212] transition-colors duration-300">
      {/* Botão de tema */}
      <button
        className="absolute top-4 right-4 rounded-full p-2 bg-[#ededf7] dark:bg-[#23233b] border border-[#eaeaec] dark:border-[#23233b] shadow transition-colors duration-300 hover:bg-[#ede9fe] dark:hover:bg-[#34344d] active:scale-95"
        aria-label="Alternar tema"
        onClick={toggleTheme}
        type="button"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-[#facc15]" strokeWidth={2.4} />
        ) : (
          <Moon className="w-5 h-5 text-[#4c1d95]" strokeWidth={2.4} />
        )}
      </button>

      <div className="w-full max-w-md mx-auto rounded-lg shadow-lg border bg-white dark:bg-[#1e1e1e] border-[#eaeaec] dark:border-[#23233b] p-8 flex flex-col items-center animate-fade-in transition-colors duration-300">
        <div className="mb-5">
          <span className="text-2xl font-extrabold tracking-wide text-[#4c1d95] dark:text-[#c084fc] transition-colors duration-300">
            PetShop Login
          </span>
        </div>
        <form onSubmit={handleLogin} className="w-full space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-base font-medium text-[#121212] dark:text-white transition-colors duration-300">
              E-mail
            </label>
            <Input
              type="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white dark:bg-[#23233b] dark:text-white placeholder:text-[#888] dark:placeholder:text-[#bbbbbb] border border-[#eaeaec] dark:border-[#23233b] transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="block mb-1 text-base font-medium text-[#121212] dark:text-white transition-colors duration-300">
              Senha
            </label>
            <Input
              type="password"
              id="senha"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="bg-white dark:bg-[#23233b] dark:text-white placeholder:text-[#888] dark:placeholder:text-[#bbbbbb] border border-[#eaeaec] dark:border-[#23233b] transition-colors duration-300"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-2 bg-primary text-white dark:bg-[#4c1d95] dark:text-white hover:bg-[#5b21b6] dark:hover:bg-[#c084fc] transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
}
