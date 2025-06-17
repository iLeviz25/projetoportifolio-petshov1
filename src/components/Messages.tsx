
import { MessageSquare, PawPrint } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "Carlos Oliveira",
    subject: "Preciso reagendar o banho do Rex",
    preview: "Olá, gostaria de mudar o horário do banho do Rex para a próxima semana. Há disponibilidade?",
    time: "2 horas atrás",
    isRead: false
  },
  {
    id: 2,
    sender: "Maria Dias",
    subject: "Consulta para minha gata",
    preview: "Minha gata Mimi está apresentando sintomas diferentes, posso marcar uma consulta?",
    time: "6 horas atrás",
    isRead: true
  },
  {
    id: 3,
    sender: "José Souza",
    subject: "Informações sobre vacinação",
    preview: "Gostaria de saber quais vacinas são recomendadas para gatos filhotes.",
    time: "Ontem",
    isRead: false
  }
];

export const Messages = () => {
  const unreadCount = messages.filter(msg => !msg.isRead).length;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-3 text-[#121212] dark:text-white">
          <MessageSquare className="w-8 h-8 text-[#c084fc]" />
          Mensagens
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-base text-[#444444] dark:text-[#bbbbbb] font-medium">
            {unreadCount} não lidas
          </span>
          <button className="bg-[#c084fc] hover:bg-[#a78bfa] dark:bg-[#4c1d95] dark:hover:bg-[#a78bfa] text-white px-6 py-3 rounded-xl transition-colors duration-200 text-base font-medium">
            Nova Mensagem
          </button>
        </div>
      </div>
      <div className="rounded-2xl border border-[#eaeaec] dark:border-[#23233b] shadow-lg dark:shadow-[0_0_12px_rgba(0,0,0,0.32)] bg-white dark:bg-[#1f1f2b]">
        <div className="divide-y divide-[#eaeaec] dark:divide-[#23233b]">
          {messages.map((message) => (
            <div key={message.id} className={`p-6 hover:bg-[#ede9fe] dark:hover:bg-[#262636] transition-colors cursor-pointer ${!message.isRead ? 'bg-[#f5f5fa] dark:bg-[#23233b]' : ''}`}>
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] dark:from-[#262636] dark:to-[#2c2c3a] rounded-xl flex items-center justify-center">
                    <PawPrint className="w-7 h-7 text-[#a78bfa]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                      <h3 className={`text-base font-semibold ${!message.isRead ? 'text-[#121212] dark:text-white' : 'text-[#444444] dark:text-[#bbbbbb]'}`}>
                        {message.sender}
                      </h3>
                      <div className="flex items-center gap-2">
                        {!message.isRead && (
                          <div className="w-3 h-3 bg-[#c084fc] rounded-full"></div>
                        )}
                        <span className="text-sm text-[#444444] dark:text-[#bbbbbb]">
                          {message.time}
                        </span>
                      </div>
                    </div>
                    <h4 className={`text-base font-medium mb-3 ${!message.isRead ? 'text-[#4c1d95] dark:text-[#a78bfa]' : 'text-[#444444] dark:text-[#bbbbbb]'}`}>
                      {message.subject}
                    </h4>
                    <p className="text-sm text-[#444444] dark:text-[#bbbbbb] line-clamp-2">
                      {message.preview}
                    </p>
                  </div>
                </div>
                <MessageSquare className={`w-6 h-6 mt-2 sm:mt-0 sm:ml-4 ${!message.isRead ? 'text-[#c084fc] dark:text-[#a78bfa]' : 'text-[#bbbbbb] dark:text-[#a78bfa]'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
