import React, { useEffect, useState } from "react";
import About from "../components/sections/about"; 
import Stats from "../components/sections/stats"; 
import Similar from "../components/sections/similar"; 
import { getDominantColor } from "./colorthief";


const PokemonModal = ({ pokemon, onClose }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [bgColor, setBgColor] = useState("");
  console.log(bgColor);
  const getBgColor = async () => {
    if (pokemon?.sprites?.other["official-artwork"].front_default) {
      const color = await getDominantColor(
        pokemon.sprites.other["official-artwork"].front_default
      );
      if (color) setBgColor(color);
    }
  };

  useEffect(() => {
    getBgColor();
    // eslint-disable-next-line
  }, [pokemon]);

  if (!pokemon) {
    return <div>Loading.....</div>;
  }
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50  ">
      <div className="bg-white w-full md:w-1/2 lg:w-2/5 rounded-lg overflow-auto relative h-full px-3 py-2">
        <div className="relative flex justify-center rounded-lg text-center h-44 " style={{
              backgroundColor: bgColor ? `rgb(${bgColor})` : "transparent",
            }}>
          <button
            className="text-gray-500 hover:text-gray-700 bg-white absolute left-2 top-2 rounded-sm px-2"
            onClick={onClose}
          >
            &larr;
          </button>
          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt={`${pokemon.name} img`}
            className="flex  absolute w-44 h-44 mt-7"
          />
        </div>
        <h2 className="text-xl font-bold text-center mt-4 capitalize">{pokemon.name}</h2>
        <div className="p-4 ">
          {activeSection === "about" && <About pokemon={pokemon} />}
          {activeSection === "stats" && <Stats pokemon={pokemon} />}
          {activeSection === "similar" && (
            <div style={{ maxHeight: 500, overflowY: "auto" }}>  
              <Similar />
            </div>
          )}
        </div>
        <div className="flex justify-around  border-t pt-3 pb-3 bg-zinc-200 rounded-full mx-1  ">
          <button
            className={`px-6 py-2 rounded-full ${activeSection === "about" ? "text-black font-semibold bg-white" : ""}`}
            onClick={() => setActiveSection("about")}
          >
            About
          </button>
          <button
            className={`px-6 py-2 rounded-full ${activeSection === "stats" ? "text-black font-semibold bg-white" : ""}`}
            onClick={() => setActiveSection("stats")}
          >
            Stats
          </button>
          <button
            className={`px-6 py-2 rounded-full ${activeSection === "similar" ? "text-black font-semibold bg-white" : ""}`}
            onClick={() => setActiveSection("similar")}
          >
            Similar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
