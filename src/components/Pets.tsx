
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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-purple-700 dark:text-[#f5f5f5]">
          <Dog className="w-7 h-7" />
          Pets Cadastrados
        </h1>
        <div className="text-sm text-purple-700 dark:text-[#bbbbbb]">
          Total: {pets.length} pets
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white dark:bg-[#252535] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-6 transition-all duration-200 hover:shadow-md hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-[#1f1f2b] rounded-full flex items-center justify-center">
                <PawPrint className="w-8 h-8 text-purple-600 dark:text-[#7dd3fc]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-800 dark:text-[#f5f5f5]">{pet.name}</h3>
                <div className="text-sm text-gray-500 dark:text-[#bbbbbb] mt-1">
                  Espécie: <span className="font-medium">{pet.specie}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-[#bbbbbb] mt-1">
                  Idade: <span className="font-medium">{pet.age}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-[#bbbbbb] mt-1">
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
