import React, { useState } from 'react';
import About from '../components/sections/about';
import Stats from '../components/sections/stats';
import Similar from '../components/sections/similar';

const PokemonDetails = ({ pokemon }) => {
  const [selectedSection, setSelectedSection] = useState('about');

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  const { name, sprites } = pokemon;

  const renderSection = () => {
    switch (selectedSection) {
      case 'about':
        return <About pokemon={pokemon} />;
      case 'stats':
        return <Stats pokemon={pokemon} />;
      case 'similar':
        return <Similar />;
      default:
        return <About pokemon={pokemon} />;
    }
  };

  return (
    <div className="p-4">
      <div className="bg-teal-300 p-4 rounded-lg text-center">
        <img
          src={sprites?.other["official-artwork"].front_default}
          alt={`${name} img`}
          className="mx-auto"
        />
      </div>
      <h2 className="text-xl font-bold text-center mt-4 capitalize">{name}</h2>
      <div className="p-4">{renderSection()}</div>
      <div className="flex justify-around mt-4 border-t pt-4 rounded bg-zinc-200">
        <button
          onClick={() => setSelectedSection('about')}
          className={`${
            selectedSection === 'about' ? 'text-black font-semibold' : ''
          } px-6 py-2 rounded-full`}
        >
          About
        </button>
        <button
          onClick={() => setSelectedSection('stats')}
          className={`${
            selectedSection === 'stats' ? 'text-black font-semibold' : ''
          } px-6 py-2 rounded-full`}
        >
          Stats
        </button>
        <button
          onClick={() => setSelectedSection('similar')}
          className={`${
            selectedSection === 'similar' ? 'text-black font-semibold' : ''
          } px-6 py-2 rounded-full`}
        >
          Similar
        </button>
      </div>
    </div>
  );
};

export default PokemonDetails;
