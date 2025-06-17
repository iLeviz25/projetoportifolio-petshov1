
import { Dog, Bath, MessageSquare, PawPrint } from "lucide-react";

const statsCards = [
  {
    title: "Total de Pets",
    value: "58",
    icon: Dog,
    change: "+6%",
    changeType: "positive",
  },
  {
    title: "Agendamentos do Mês",
    value: "24",
    icon: Bath,
    change: "+10%",
    changeType: "positive",
  },
  {
    title: "Mensagens Pendentes",
    value: "3",
    icon: MessageSquare,
    change: "0",
    changeType: "neutral",
  },
];

const recentAppointments = [
  { id: 1, petName: "Rex", service: "Banho", date: "2024-06-14", status: "Concluído" },
  { id: 2, petName: "Mimi", service: "Consulta", date: "2024-06-13", status: "Agendado" },
  { id: 3, petName: "Thor", service: "Tosa", date: "2024-06-12", status: "Em Atendimento" },
  { id: 4, petName: "Bella", service: "Banho", date: "2024-06-11", status: "Concluído" },
  { id: 5, petName: "Simba", service: "Consulta", date: "2024-06-10", status: "Agendado" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Concluído":
      return "bg-green-200 text-green-800 dark:bg-green-900/60 dark:text-green-300";
    case "Agendado":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/70 dark:text-yellow-300";
    case "Em Atendimento":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/70 dark:text-blue-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

export const Overview = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-3 text-[#121212] dark:text-white">
        <PawPrint className="w-8 h-8 text-[#c084fc]" />
        Visão Geral
      </h1>
      
      {/* Stats Cards */}
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-3">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="flex-1 min-w-72 rounded-2xl border border-[#eaeaec] dark:border-[#23233b] shadow-lg p-6 transition-all duration-300 hover:shadow-xl dark:bg-[#1f1f2b] bg-white hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#444444] dark:text-[#bbbbbb] mb-2">{card.title}</p>
                  <p className="text-3xl font-semibold text-[#121212] dark:text-white mb-3">{card.value}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#444444] dark:text-[#bbbbbb]">Variação mensal</span>
                    <span className="text-sm text-[#444444] dark:text-[#bbbbbb]">{card.change}</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] dark:from-[#2c2c3a] dark:to-[#262636] rounded-xl">
                  <Icon className="w-8 h-8 text-[#a78bfa]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Appointments */}
      <div className="dark:bg-[#1f1f2b] bg-white shadow-lg rounded-2xl border border-[#eaeaec] dark:border-[#23233b] overflow-hidden">
        <div className="px-8 py-6 border-b border-[#eaeaec] dark:border-[#23233b]">
          <h2 className="text-xl font-semibold text-[#121212] dark:text-white">Últimos Agendamentos</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px]" style={{ borderSpacing: '0.5rem' }}>
            <thead className="bg-[#f5f5fa] dark:bg-[#23233b]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider rounded-l-lg">
                  Nome do Pet
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider">
                  Serviço
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#444444] dark:text-[#bbbbbb] uppercase tracking-wider rounded-r-lg">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eaeaec] dark:divide-[#23233b]">
              {recentAppointments.map((appt) => (
                <tr
                  key={appt.id}
                  className="hover:bg-[#ede9fe] dark:hover:bg-[#262636] transition-colors"
                >
                  <td className="px-6 py-5 whitespace-nowrap text-base font-medium text-[#121212] dark:text-white">
                    {appt.petName}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-base text-[#444444] dark:text-[#bbbbbb]">
                    {appt.service}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-base text-[#444444] dark:text-[#bbbbbb]">
                    {new Date(appt.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span
                      className={`inline-flex px-3 py-2 text-sm font-semibold rounded-full ${getStatusColor(appt.status)}`}
                    >
                      {appt.status}
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
