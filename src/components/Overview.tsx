
import { Dog, Bath, MessageSquare, PawPrint } from "lucide-react";

const statsCards = [
  {
    title: "Total de Pets",
    value: "58",
    icon: Dog,
    color:
      "bg-[#1f1f2b] text-white dark:bg-[#1f1f2b] dark:text-white",
    change: "+6%",
    changeType: "positive",
  },
  {
    title: "Agendamentos do Mês",
    value: "24",
    icon: Bath,
    color:
      "bg-[#1f1f2b] text-white dark:bg-[#1f1f2b] dark:text-white",
    change: "+10%",
    changeType: "positive",
  },
  {
    title: "Mensagens Pendentes",
    value: "3",
    icon: MessageSquare,
    color:
      "bg-[#1f1f2b] text-white dark:bg-[#1f1f2b] dark:text-white",
    change: "0",
    changeType: "neutral",
  },
];

const recentAppointments = [
  { id: 1, petName: "Rex", service: "Banho", date: "2024-06-14", status: "Concluído" },
  { id: 2, petName: "Mimi", service: "Consulta", date: "2024-06-13", status: "Agendado" },
  { id: 3, petName: "Thor", service: "Tosa", date: "2024-06-12", status: "Em Atendimento" },
  { id: 4, petName: "Bella", service: "Banho", date: "2024-06-11", status: "Concluído" },
  { id: 5, petName: "Simba", service: "Consulta", date: "2024-06-10", status: "Agendado" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Concluído":
      return "bg-green-900/60 text-green-300";
    case "Agendado":
      return "bg-yellow-900/70 text-yellow-300";
    case "Em Atendimento":
      return "bg-blue-900/70 text-blue-300";
    default:
      return "bg-gray-800 text-gray-300";
  }
};

export const Overview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold flex items-center gap-2 text-white">
        <PawPrint className="w-7 h-7 inline-block text-[#c084fc]" />
        Visão Geral
      </h1>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`rounded-lg border border-[#23233b] shadow-[0_0_10px_rgba(0,0,0,0.3)] p-6 transition-all duration-200 hover:shadow-md ${card.color} hover:scale-105`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#bbbbbb]">{card.title}</p>
                  <p className="text-3xl font-bold mt-2 text-white">{card.value}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs font-semibold text-[#bbbbbb]">Variação mensal</span>
                    <span className="ml-2 text-xs text-[#bbbbbb]">{card.change}</span>
                  </div>
                </div>
                <div className="p-3 bg-[#2c2c3a] rounded-lg">
                  <Icon className="w-6 h-6 text-[#a78bfa]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Recent Appointments */}
      <div className="bg-[#1f1f2b] shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg border border-[#23233b]">
        <div className="p-6 border-b border-[#23233b]">
          <h2 className="text-lg font-semibold text-white">Últimos Agendamentos</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#23233b]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#bbbbbb] uppercase tracking-wider">
                  Nome do Pet
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#bbbbbb] uppercase tracking-wider">
                  Serviço
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#bbbbbb] uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#bbbbbb] uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#23233b]">
              {recentAppointments.map((appt) => (
                <tr
                  key={appt.id}
                  className="hover:bg-[#262636] transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {appt.petName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#bbbbbb]">
                    {appt.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#bbbbbb]">
                    {new Date(appt.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appt.status)}`}
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
