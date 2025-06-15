
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h1 className="text-lg sm:text-2xl font-bold flex items-center gap-2 text-[#121212] dark:text-white">
          <Dog className="w-6 sm:w-7 h-6 sm:h-7 text-[#c084fc]" />
          Pets Cadastrados
        </h1>
        <div className="text-xs sm:text-sm text-[#444444] dark:text-[#bbbbbb]">
          Total: {pets.length} pets
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="rounded-lg border border-[#eaeaec] dark:border-[#23233b] p-4 sm:p-6 shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_12px_rgba(0,0,0,0.32)] bg-white dark:bg-[#1f1f2b] transition-all hover:shadow-md hover:scale-105"
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#ede9fe] dark:bg-[#262636] rounded-full flex items-center justify-center">
                <PawPrint className="w-7 h-7 text-[#a78bfa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-[#121212] dark:text-white">{pet.name}</h3>
                <div className="text-xs sm:text-sm text-[#444444] dark:text-[#bbbbbb] mt-1">
                  Espécie: <span className="font-medium">{pet.specie}</span>
                </div>
                <div className="text-xs sm:text-sm text-[#444444] dark:text-[#bbbbbb] mt-1">
                  Idade: <span className="font-medium">{pet.age}</span>
                </div>
                <div className="text-xs sm:text-sm text-[#444444] dark:text-[#bbbbbb] mt-1">
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
