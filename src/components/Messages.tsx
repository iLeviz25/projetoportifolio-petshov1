
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-pink-700 dark:text-pink-200">
          <MessageSquare className="w-7 h-7" />
          Mensagens
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-teal-700 dark:text-pink-300">
            {unreadCount} não lidas
          </span>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
            Nova Mensagem
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-pink-900">
        <div className="divide-y divide-gray-200 dark:divide-pink-900">
          {messages.map((message) => (
            <div key={message.id} className={`p-6 hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors cursor-pointer ${!message.isRead ? 'bg-blue-50 dark:bg-pink-900/30' : ''}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                    <PawPrint className="w-6 h-6 text-pink-500 dark:text-pink-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-sm font-semibold ${!message.isRead ? 'text-teal-800 dark:text-pink-200' : 'text-gray-700 dark:text-pink-300'}`}>
                        {message.sender}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {!message.isRead && (
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        )}
                        <span className="text-xs text-gray-500 dark:text-pink-300">
                          {message.time}
                        </span>
                      </div>
                    </div>
                    <h4 className={`text-sm font-medium mb-2 ${!message.isRead ? 'text-pink-700 dark:text-pink-200' : 'text-gray-700 dark:text-pink-300'}`}>
                      {message.subject}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-pink-400 line-clamp-2">
                      {message.preview}
                    </p>
                  </div>
                </div>
                <MessageSquare className={`w-5 h-5 ml-4 ${!message.isRead ? 'text-pink-500 dark:text-pink-300' : 'text-gray-400 dark:text-pink-500'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
