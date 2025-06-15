
import { User, Bell, Lock, Globe, Palette, Database } from "lucide-react";

const settingsGroups = [
  {
    title: "Perfil",
    icon: User,
    items: [
      { label: "Informações Pessoais", description: "Altere seu nome, email e foto" },
      { label: "Preferências", description: "Configure suas preferências de uso" }
    ]
  },
  {
    title: "Notificações",
    icon: Bell,
    items: [
      { label: "Email", description: "Receber notificações por email" },
      { label: "Push", description: "Notificações push no navegador" }
    ]
  },
  {
    title: "Segurança",
    icon: Lock,
    items: [
      { label: "Alterar Senha", description: "Atualize sua senha de acesso" },
      { label: "Autenticação 2FA", description: "Adicione uma camada extra de segurança" }
    ]
  },
  {
    title: "Sistema",
    icon: Database,
    items: [
      { label: "Backup", description: "Configure backups automáticos" },
      { label: "Integração", description: "Conecte com outras ferramentas" }
    ]
  }
];

export const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Configurações</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingsGroups.map((group, groupIndex) => {
          const Icon = group.icon;
          return (
            <div key={groupIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{group.title}</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors">
                      Configurar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Palette className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Tema</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Idioma</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Database className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Exportar Dados</span>
          </button>
        </div>
      </div>
    </div>
  );
};
