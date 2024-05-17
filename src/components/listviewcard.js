import React from 'react';
import {  useNavigate } from 'react-router-dom';

// Shared Tailwind CSS class strings
const roundedFull = "rounded-full";
const textZinc700 = "text-zinc-700";
const px3Py1 = "px-3 py-1";
const textSmFontSemibold = "text-sm font-semibold";

// Smaller component for the Pokemon type badge
const TypeBadge = ({ type, bgColor }) => (
  <span className={`${bgColor} ${roundedFull} ${px3Py1} ${textSmFontSemibold} ${textZinc700} mr-2`}>
    {type}
  </span>
);

// Main component for the Pokemon card
const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm w-full mx-auto rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out relative">
      <img
        className="w-full bg-slate-200"
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt="pokemon img"
      />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2 text-center md:text-left">{pokemon.name}</div>
        <p className={`${textZinc700} text-base text-center md:text-left`}>
          <TypeBadge type="Grass" bgColor="bg-green-200" />
          <TypeBadge type="Poison" bgColor="bg-purple-200" style={{ marginRight: 0 }} />
        </p>
      </div>
      <div className="px-0 pt-6 pb-6 flex">
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out absolute bottom-0 mb-4 w-full" onClick={()=>navigate(`/detailsview/${pokemon.id}`)}>
          View Pokemon
          
        </button>
        
      </div>
    </div>
  );
};

export default PokemonCard;
