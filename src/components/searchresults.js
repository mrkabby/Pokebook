import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListViewCard from '../components/cards/listviewcard';
import TubeSpinner from "../assets/tube-spinner.svg";
import { useTheme } from './themecontext';
import Topbar from './topbar';

const SearchResults = () => {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const themeColor = useTheme();

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
        const data = await response.json();
        const filteredResults = data.results.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const detailedResults = await Promise.all(filteredResults.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        }));
        setSearchResults(detailedResults);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
      setLoading(false);
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <>
    <Topbar />
    
    <div className="p-4">
      <button 
        className=" text-white px-4 py-2 rounded-md"
        style={{ backgroundColor: themeColor.themeColor }}
        onClick={() => navigate(-1)} // Navigate back to the previous page
      >
        &larr; Go Back
      </button>
      <div className="flex justify-center m-5 md:p-10">
        {loading ? (
          <img src={TubeSpinner} alt="Loading" className="w-24 h-24" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {searchResults.map((pokemon) => (
              <ListViewCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default SearchResults;
