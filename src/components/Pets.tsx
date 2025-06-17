
import { Dog, PawPrint } from "lucide-react";

const pets = [
  { id: 1, name: "Rex", specie: "Cão", age: "3 anos", owner: "Maria Dias" },
  { id: 2, name: "Mimi", specie: "Gato", age: "2 anos", owner: "Carlos Oliveira" },
  { id: 3, name: "Thor", specie: "Gato", age: "1 ano", owner: "José Souza" },
  { id: 4, name: "Mel", specie: "Cão", age: "5 anos", owner: "Fernanda Silva" }
];

export const Pets = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-3 text-[#121212] dark:text-white">
          <Dog className="w-7 h-7 text-[#c084fc]" />
          Pets Cadastrados
        </h1>
        <div className="text-base text-[#444444] dark:text-[#bbbbbb] font-medium">
          Total: {pets.length} pets
        </div>
      </div>
      <div className="flex flex-wrap gap-4 w-full">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="flex-1 min-w-[280px] rounded-xl border border-[#eaeaec] dark:border-[#23233b] p-6 shadow-lg dark:shadow-[0_0_12px_rgba(0,0,0,0.32)] bg-white dark:bg-[#1f1f2b] transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] dark:from-[#262636] dark:to-[#2c2c3a] rounded-xl flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-[#a78bfa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-2">{pet.name}</h3>
                <div className="text-sm text-[#444444] dark:text-[#bbbbbb] mb-1">
                  Espécie: <span className="font-medium">{pet.specie}</span>
                </div>
                <div className="text-sm text-[#444444] dark:text-[#bbbbbb] mb-1">
                  Idade: <span className="font-medium">{pet.age}</span>
                </div>
                <div className="text-sm text-[#444444] dark:text-[#bbbbbb]">
                  Tutor: <span className="font-medium">{pet.owner}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
