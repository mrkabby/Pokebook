import React from 'react';



const PokemonCard = ({ name, image }) => {
  
  return (
    <div className={`max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-zinc-800`}>
      <img
        className="w-full h-56 p-4"
        src={image}
        alt={`${name} Pokemon`}
      />
      <div className="py-4 text-center text-xl font-semibold dark:text-white">
        {name}
      </div>
    </div>
  );
};

export default PokemonCard;
