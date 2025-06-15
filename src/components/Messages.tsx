
import { Mail, Clock, User } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "João Silva",
    subject: "Dúvida sobre o projeto",
    preview: "Olá, gostaria de esclarecer algumas questões sobre o desenvolvimento do site...",
    time: "2 horas atrás",
    isRead: false
  },
  {
    id: 2,
    sender: "Maria Santos",
    subject: "Feedback do design",
    preview: "O design ficou excelente! Apenas algumas pequenas alterações que gostaria de sugerir...",
    time: "5 horas atrás",
    isRead: true
  },
  {
    id: 3,
    sender: "Pedro Costa",
    subject: "Solicitação de orçamento",
    preview: "Preciso de um orçamento para desenvolvimento de um aplicativo mobile com as seguintes funcionalidades...",
    time: "1 dia atrás",
    isRead: false
  },
  {
    id: 4,
    sender: "Ana Oliveira",
    subject: "Agendamento de reunião",
    preview: "Podemos agendar uma reunião para esta semana para discutir os próximos passos do projeto?",
    time: "2 dias atrás",
    isRead: true
  },
  {
    id: 5,
    sender: "Carlos Mendes",
    subject: "Entrega do projeto",
    preview: "Parabéns pela entrega! O projeto superou nossas expectativas. Quando podemos discutir a próxima fase?",
    time: "3 dias atrás",
    isRead: true
  }
];

export const Messages = () => {
  const unreadCount = messages.filter(msg => !msg.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mensagens</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {unreadCount} não lidas
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
            Nova Mensagem
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {messages.map((message) => (
            <div key={message.id} className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${!message.isRead ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-sm font-semibold ${!message.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {message.sender}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {!message.isRead && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {message.time}
                        </span>
                      </div>
                    </div>
                    <h4 className={`text-sm font-medium mb-2 ${!message.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                      {message.subject}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {message.preview}
                    </p>
                  </div>
                </div>
                <Mail className={`w-5 h-5 ml-4 ${!message.isRead ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
