import React from 'react';
import { useNavigate, useParams, NavLink, Routes, Route } from 'react-router-dom';
import useQueryPokemon from '../components/usehooks/usequerysinglepokemon';
import About from '../components/sections/about'; 
import Stats from '../components/sections/stats'; 
import Similar from '../components/sections/similar'; 

const PokemonDetails = () => {
  const { id } = useParams();
  const { singlePokemon, loading } = useQueryPokemon(id);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (!singlePokemon) {
    return <div>Pokemon not found.</div>;
  }

  const { name, sprites } = singlePokemon;

  return (
    <div className="fixed inset-0 flex justify-end">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white h-full overflow-y-auto">
        <div className="p-4">
          <button className="mb-4 place-items-end text-zinc-600" onClick={() => navigate("/listview/")}>&larr; Back</button>
          <div className="bg-teal-300 p-4 rounded-lg text-center">
            <img
              src={sprites?.other["official-artwork"].front_default}
              alt={`${name} img`}
              className="mx-auto"
            />
          </div>
          <h2 className="text-xl font-bold text-center mt-4 capitalize ">{name}</h2>
          <div className="p-4">
            <Routes>
              <Route path="about" element={<About pokemon={singlePokemon} />} />
              <Route path="stats" element={<Stats pokemon={singlePokemon} />} />
              <Route path="similar" element={<Similar />} />
            </Routes>
          </div>
          <div className="flex justify-around mt-4 border-t pt-4 rounded bg-zinc-200 ">
            <NavLink to="about" activeClassName="text-black font-semibold px-6 py-2 rounded-full">
              About
            </NavLink>
            <NavLink to="stats" activeClassName="text-black font-semibold px-6 py-2 rounded-full">
              Stats
            </NavLink>
            <NavLink to="similar" activeClassName="text-black font-semibold px-6 py-2 rounded-full">
              Similar
            </NavLink>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
