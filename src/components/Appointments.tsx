
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

export const Appointments = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-3 text-[#121212] dark:text-white">
          <Bath className="w-8 h-8 text-[#c084fc]" />
          Agendamentos (Consultas e Banhos)
        </h1>
        <div className="text-base text-[#444444] dark:text-[#bbbbbb] font-medium">
          Total: {appointments.length}
        </div>
      </div>
      <div className="rounded-2xl border border-[#eaeaec] dark:border-[#23233b] shadow-lg dark:shadow-[0_0_12px_rgba(0,0,0,0.32)] bg-white dark:bg-[#1f1f2b] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[375px] sm:min-w-[480px]" style={{ borderSpacing: '0.5rem' }}>
            <thead className="bg-[#f5f5fa] dark:bg-[#23233b]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider rounded-l-lg">Nome do Pet</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider">Serviço</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider">Data</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((item) => (
                <tr key={item.id} className="hover:bg-[#ede9fe] dark:hover:bg-[#262636] transition-colors">
                  <td className="px-6 py-5 text-base font-medium text-[#121212] dark:text-white">{item.pet}</td>
                  <td className="px-6 py-5 text-base text-[#444444] dark:text-[#bbbbbb]">{item.service}</td>
                  <td className="px-6 py-5 text-base text-[#444444] dark:text-[#bbbbbb]">{new Date(item.date).toLocaleDateString('pt-BR')}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex px-3 py-2 text-sm font-semibold rounded-full ${getStatusColor(item.status)}`}>
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
