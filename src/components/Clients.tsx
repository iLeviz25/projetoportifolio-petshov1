
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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-[#121212] dark:text-white">
          <Users className="w-7 h-7 text-[#c084fc]" />
          Clientes (Tutores)
        </h1>
        <div className="text-sm text-[#444444] dark:text-[#bbbbbb]">
          Total: {clients.length} tutores
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="rounded-lg border border-[#eaeaec] dark:border-[#23233b] p-6 shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_12px_rgba(0,0,0,0.32)] bg-white dark:bg-[#1f1f2b] transition-all hover:shadow-md hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#ede9fe] dark:bg-[#262636] rounded-full flex items-center justify-center">
                <PawPrint className="w-7 h-7 text-[#a78bfa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#121212] dark:text-white">{client.name}</h3>
                <div className="text-sm text-[#444444] dark:text-[#bbbbbb] mt-1">
                  Pet: <span className="font-medium">{client.pet}</span>
                </div>
                <div className="text-sm text-[#444444] dark:text-[#bbbbbb] mt-1">
                  Tipo: <span className="font-medium">{client.animalType}</span>
                </div>
                <div className="text-xs text-[#bbbbbb] mt-2">
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
