import { useEffect, useState } from "react";

const useQueryAllPokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0");
      const data = await response.json();

      const fetchPokemonDetails = async (results) => {
        const promises = results.map(async (pokemon) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          return response.json();
        });
        const pokemons = await Promise.all(promises);
        pokemons.sort((a, b) => a.id - b.id);
        setAllPokemons(pokemons);
        setLoading(false);
      };

      fetchPokemonDetails(data.results);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return {
    allPokemons,
    loading,
  };
};

export default useQueryAllPokemon;
