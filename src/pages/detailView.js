import React from 'react'
import PokemonDetails from '../components/detailviewcard'
import useQueryPokemon from '../components/usequearypokemon';

const detailView = () => {
  const { pokemon} = useQueryPokemon();
  const getPageData = () => {
    
    return pokemon();
  };
  return (
    <div>
      {getPageData().map((pokemon) => (
              
                
      <PokemonDetails key={pokemon.id}
       />
      ))}
    </div>
  )
}

export default detailView