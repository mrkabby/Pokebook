import { useEffect, useState } from "react";

const useQueryPokemon = (id) => {
  const [singlePokemon, setSinglePokemon] = useState(null); // Changed default state to null
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setSinglePokemon(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await response.json();
          setSinglePokemon(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching Pokémon data:", error);
          setLoading(false);
        }
      })();
    }
  }, [id]);

  return {
    singlePokemon,
    loading,
  };
};

export default useQueryPokemon;
