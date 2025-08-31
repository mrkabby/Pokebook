import React from "react";

const SimilarCard = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-[#E1E1E1] rounded-xl flex items-center justify-center mb-2">
        <img
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-24 h-24 object-contain"
        />
      </div>
      <h2 className="text-2xl font-bold text-center capitalize mb-2">{pokemon.name}</h2>
    </div>
  );
};

export default SimilarCard;
