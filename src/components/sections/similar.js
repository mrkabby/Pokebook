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
    <div>
      <h3 className="text-lg font-semibold border-b pb-2 text-center">Similar</h3>
      {loading ? (
        <p>Loading similar Pokémon...</p>
      ) : (
        <div className={`grid grid-template-columns repeat(auto-fit, minmax(250px, 1fr)) gap-8 py-7 md:grid-template-columns repeat(auto-fit, minmax(250px, 1fr)) lg:grid-template-columns repeat(auto-fit, minmax(250px, 1fr))`}
        >
          {similarPokemon.map((pokemon) => (
            <SimilarCard key={pokemon.id} pokemon={pokemon} className ="w-1/12" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Similar;
