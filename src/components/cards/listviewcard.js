import React, { useState } from "react";
import { useTheme } from "../themecontext";
import PokemonModal from "../pokemonModal"; 

// Shared Tailwind CSS class strings
const roundedFull = "rounded-full";
const textZinc700 = "text-zinc-700";
const px3Py1 = "px-3 py-1";
const textSmFontSemibold = "text-sm font-semibold";

// Smaller component for the Pokemon type badge
const TypeBadge = ({ type }) => {
  // Dynamic background color based on the type
  const bgColor = `bg-${type}-200`;
  const textColor = `text-${type}-800`;

  return (
    <span
      className={`${bgColor} ${roundedFull} ${px3Py1} ${textSmFontSemibold} ${textColor} bg-[#E1E1E1] mx-2 capitalize`}
    >
      {type}
    </span>
  );
};

// Main component for the Pokemon card
const ListViewCard = ({ pokemon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {themeColor} = useTheme();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full md:w-64 p-2 h-[230px] rounded-2xl flex flex-col justify-center my-5 items-center bg-white group relative hover:cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="h-full w-full mt-5 flex flex-col items-center">
          <div className="w-full bg-slate-200 h-24 flex items-center justify-center rounded-lg relative">
            <img
              className="w-44 h-44 object-contain absolute -bottom-1 left-1/2 transform -translate-x-1/2"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt="pokemon img"
            />
          </div>
          <h1 className="font-bold text-xl mt-2 text-center capitalize">
            {pokemon.name}
          </h1>
          <div className="flex items-center px-4 py-1">
            <h2 className={`${textZinc700} text-base pt-3 text-center`}>
              {pokemon.types.map((typeInfo) => (
                <TypeBadge key={typeInfo.type.name} type={typeInfo.type.name} />
              ))}
            </h2>
          </div>
          <div className="opacity-0 group-hover:opacity-100 mt-4">
            <button
              className="text-white rounded-xl px-10 mb-2 flex justify-between w-full"
              style={{ backgroundColor: themeColor }}
              onClick={handleOpenModal}
            >
              <span>View Pokémon</span>
              <span className="flex justify-end">
                <svg
                  className="h-6 w-6 inline-block ml-2"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <PokemonModal pokemon={pokemon} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ListViewCard;
