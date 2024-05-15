import React from 'react';

const PokemonModal = ({ name, image, types, height, weight, abilities }) => {
  return (
    <div className="fixed inset-0 flex justify-end">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white h-full overflow-y-auto">
        <div className="p-4">
          <button className="mb-4 text-zinc-600">&larr; Back</button>
          <div className="bg-teal-300 p-4 rounded-lg text-center">
            <img src={image} alt={name} className="mx-auto" />
          </div>
          <h2 className="text-xl font-bold text-center mt-4">{name}</h2>
          <div className="flex justify-center gap-2 mt-2">
            {types.map((type) => (
              <span
                key={type} // Add a unique key for each type
                className={`bg-${type.toLowerCase()}-200 text-${type.toLowerCase()}-800 py-1 px-3 rounded-full text-sm`}
              >
                {type}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold border-b pb-2">About</h3>
            <div className="mt-2">
              <div className="flex justify-between">
                <span>Height</span>
                <span>{height}m</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Weight</span>
                <span>{weight}kg</span>
              </div>
              <div className="mt-2">
                <span>Abilities</span>
                <ul className="list-disc pl-5">
                  {abilities.map((ability) => (
                    <li key={ability}>{ability}</li>
                  ))}
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

export default PokemonModal;
