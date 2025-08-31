import React, { useState, useEffect } from 'react';
 
import SimilarCard from '../cards/similarcard.';

const Similar = () => {
  const [similarPokemon, setSimilarPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch similar Pokémon data
    const fetchSimilarPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5');
        const data = await response.json();
        const promises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        });
        const detailedPokemon = await Promise.all(promises);
        setSimilarPokemon(detailedPokemon);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching similar Pokémon:', error);
        setLoading(false);
      }
    };

    fetchSimilarPokemon();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-lg font-bold mb-4 text-center">Similar</h3>
      {loading ? (
        <p>Loading similar Pokémon...</p>
      ) : (
  <div className="grid grid-cols-2 gap-6 w-full max-w-xs mx-auto">
          {[...new Set(similarPokemon.map(p => p.name))].map((name) => {
            const pokemon = similarPokemon.find(p => p.name === name);
            return (
              <div key={pokemon.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                  <SimilarCard pokemon={pokemon} />
                </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Similar;
