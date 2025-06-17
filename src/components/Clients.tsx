
import { Users, PawPrint } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Carlos Oliveira",
    pet: "Mimi",
    animalType: "Gato",
    registrationDate: "2024-05-12"
  },
  {
    id: 2,
    name: "Maria Dias",
    pet: "Rex",
    animalType: "Cão",
    registrationDate: "2024-05-07"
  },
  {
    id: 3,
    name: "Fernanda Silva",
    pet: "Mel",
    animalType: "Cão",
    registrationDate: "2024-04-23"
  },
  {
    id: 4,
    name: "José Souza",
    pet: "Thor",
    animalType: "Gato",
    registrationDate: "2024-03-15"
  }
];

export const Clients = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-3 text-[#121212] dark:text-white">
          <Users className="w-7 h-7 text-[#c084fc]" />
          Clientes (Tutores)
        </h1>
        <div className="text-base text-[#444444] dark:text-[#bbbbbb] font-medium">
          Total: {clients.length} tutores
        </div>
      </div>
      <div className="flex flex-wrap gap-4 w-full">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-1 min-w-[280px] rounded-xl border border-[#eaeaec] dark:border-[#23233b] p-6 shadow-lg dark:shadow-[0_0_12px_rgba(0,0,0,0.32)] bg-white dark:bg-[#1f1f2b] transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] dark:from-[#262636] dark:to-[#2c2c3a] rounded-xl flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-[#a78bfa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-2">{client.name}</h3>
                <div className="text-sm text-[#444444] dark:text-[#bbbbbb] mb-1">
                  Pet: <span className="font-medium">{client.pet}</span>
                </div>
                <div className="text-sm text-[#444444] dark:text-[#bbbbbb] mb-2">
                  Tipo: <span className="font-medium">{client.animalType}</span>
                </div>
                <div className="text-xs text-[#bbbbbb]">
                  Cadastrado em {new Date(client.registrationDate).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
