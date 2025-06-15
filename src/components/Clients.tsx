
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
        <h1 className="text-2xl font-bold flex items-center gap-2 text-pink-700 dark:text-pink-200">
          <Users className="w-7 h-7" />
          Clientes (Tutores)
        </h1>
        <div className="text-sm text-teal-700 dark:text-pink-300">
          Total: {clients.length} tutores
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-pink-900 p-6 transition-all duration-200 hover:shadow-md hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-teal-950 rounded-full flex items-center justify-center">
                <PawPrint className="w-7 h-7 text-pink-500 dark:text-pink-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-teal-800 dark:text-pink-100">
                  {client.name}
                </h3>
                <div className="text-sm text-gray-500 dark:text-pink-300 mt-1">
                  Pet: <span className="font-medium">{client.pet}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-pink-300 mt-1">
                  Tipo: <span className="font-medium">{client.animalType}</span>
                </div>
                <div className="text-xs text-gray-400 dark:text-pink-400 mt-2">
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
