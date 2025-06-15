
import { Mail, Calendar, User } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    registrationDate: "2024-01-15",
    avatar: "JS"
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria.santos@email.com",
    registrationDate: "2024-02-20",
    avatar: "MS"
  },
  {
    id: 3,
    name: "Pedro Costa",
    email: "pedro.costa@email.com",
    registrationDate: "2024-03-10",
    avatar: "PC"
  },
  {
    id: 4,
    name: "Ana Oliveira",
    email: "ana.oliveira@email.com",
    registrationDate: "2024-04-05",
    avatar: "AO"
  },
  {
    id: 5,
    name: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    registrationDate: "2024-05-12",
    avatar: "CM"
  },
  {
    id: 6,
    name: "Luciana Ferreira",
    email: "luciana.ferreira@email.com",
    registrationDate: "2024-06-01",
    avatar: "LF"
  }
];

export const Clients = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clientes</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Total: {clients.length} clientes
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:shadow-md hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {client.avatar}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {client.name}
                </h3>
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <Mail className="w-4 h-4" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>Cadastrado em {new Date(client.registrationDate).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2">
                <User className="w-4 h-4" />
                <span>Ver Perfil</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
