import React, { useState, useEffect } from 'react';

const Similar = () => {
  const [similarPokemon, setSimilarPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch similar Pokémon data
    const fetchSimilarPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5');
        const data = await response.json();
        setSimilarPokemon(data.results);
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
      <h3 className="text-lg font-semibold border-b pb-2">Similar Pokémon</h3>
      {loading ? (
        <p>Loading similar Pokémon...</p>
      ) : (
        <div className="grid grid-cols-3 ">
          {similarPokemon.map((pokemon, index) => (
            <div key={index} className="text-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
                className="mx-auto"
              />
              <p className="mt-2">{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Similar;
