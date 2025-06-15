
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

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
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#121212] transition-colors">
      <div className="w-full max-w-md mx-auto rounded-lg shadow-lg border bg-white dark:bg-[#181828] border-[#eaeaec] dark:border-[#23233b] p-8 flex flex-col items-center animate-fade-in">
        <div className="mb-5">
          <span className="text-2xl font-extrabold tracking-wide text-[#4c1d95] dark:text-[#c084fc]">
            PetShop Login
          </span>
        </div>
        <form onSubmit={handleLogin} className="w-full space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-base font-medium text-[#121212] dark:text-white">
              E-mail
            </label>
            <Input
              type="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white dark:bg-[#23233b] dark:text-white placeholder:text-[#888] dark:placeholder:text-[#bbbbbb] border border-[#eaeaec] dark:border-[#23233b]"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="block mb-1 text-base font-medium text-[#121212] dark:text-white">
              Senha
            </label>
            <Input
              type="password"
              id="senha"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="bg-white dark:bg-[#23233b] dark:text-white placeholder:text-[#888] dark:placeholder:text-[#bbbbbb] border border-[#eaeaec] dark:border-[#23233b]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-2 bg-primary text-white dark:bg-[#4c1d95] dark:text-white hover:bg-[#5b21b6] dark:hover:bg-[#c084fc] transition-colors"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
}
