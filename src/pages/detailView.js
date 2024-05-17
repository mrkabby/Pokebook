import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex justify-end">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white h-full overflow-y-auto">
        <div className="p-4">
          <button className="mb-4 text-zinc-600" onClick={()=>navigate("/listview/")}>&larr; Back</button>
          <div className="bg-teal-300 p-4 rounded-lg text-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
              alt="Ivysaur"
              className="mx-auto"
            />
          </div>
          <h2 className="text-xl font-bold text-center mt-4">Ivysaur</h2>
          <div className="flex justify-center gap-2 mt-2">
            <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-sm">Grass</span>
            <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-sm">Poison</span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold border-b pb-2">About</h3>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Height</span>
                <span>1.0m</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Weight</span>
                <span>13.0kg</span>
              </div>
              <div className="mt-2">
                <span>Abilities</span>
                <ul className="list-disc pl-5">
                  <li>overgrow</li>
                  <li>chlorophyll</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-4 border-t pt-4">
            <button className="text-zinc-800 font-semibold">About</button>
            <button className="text-zinc-500">Stats</button>
            <button className="text-zinc-500">Similar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
