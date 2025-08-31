
import React, { useState } from 'react';
import Group1 from "../../src/assets/Group 1.svg";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../components/themecontext';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { themeColor } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim().toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-zinc-100 flex items-center justify-center">
      <div className="text-center w-full max-w-sm flex flex-col items-center justify-center">
        <img 
          src={Group1} 
          alt="Pokémon Group" 
          className="mx-auto mb-4 w-full max-w-xs"
        />
        <h2 className="text-3xl font-bold mb-2 text-zinc-800">
          Poké<span style={{ color: themeColor }}>book</span>
        </h2>
        <p className="text-zinc-600 mb-6 text-center max-w-md">
          Largest Pokémon index with information<br />about every Pokémon you can think of.
        </p>
        <form className="relative rounded-full shadow-sm w-full mb-4" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Enter pokemon name" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-5 pr-12 py-3 w-full rounded-full border-4 focus:outline-none text-lg text-zinc-800"
            style={{ borderColor: themeColor }}
          />
          <button type="submit" className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke={themeColor}
              className="w-7 h-7"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </form>
        <button className="underline text-sm text-zinc-800 hover:text-pink-500" style={{ marginTop: "8px" }} onClick={() => navigate("/listview")}>View all</button>
      </div>
    </div>
  );
};

export default Home;
