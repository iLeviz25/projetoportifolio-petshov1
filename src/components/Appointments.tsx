
import { Bath } from "lucide-react";

const appointments = [
  { id: "AG-001", pet: "Rex", service: "Banho", date: "2024-06-14", status: "Concluído" },
  { id: "AG-002", pet: "Mimi", service: "Consulta", date: "2024-06-13", status: "Agendado" },
  { id: "AG-003", pet: "Thor", service: "Tosa", date: "2024-06-12", status: "Em Atendimento" },
  { id: "AG-004", pet: "Bella", service: "Banho", date: "2024-06-11", status: "Concluído" },
  { id: "AG-005", pet: "Simba", service: "Consulta", date: "2024-06-10", status: "Agendado" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Concluído":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Agendado":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "Em Atendimento":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export const Orders = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-pink-700 dark:text-pink-200">
          <Bath className="w-7 h-7" />
          Agendamentos (Consultas e Banhos)
        </h1>
        <div className="text-sm text-teal-700 dark:text-pink-300">
          Total: {appointments.length}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-pink-900 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 dark:bg-teal-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-teal-700 dark:text-pink-300 uppercase tracking-wider">Nome do Pet</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-teal-700 dark:text-pink-300 uppercase tracking-wider">Serviço</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-teal-700 dark:text-pink-300 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-teal-700 dark:text-pink-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-pink-900">
              {appointments.map((item) => (
                <tr key={item.id} className="hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-pink-200">{item.pet}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-pink-300">{item.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-pink-300">{new Date(item.date).toLocaleDateString('pt-BR')}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
