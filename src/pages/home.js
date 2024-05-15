import React from 'react';
import Group1 from "../../src/assets/Group 1.png"
import { useNavigate } from 'react-router-dom';

const PokeBook = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-100 flex items-center justify-center min-h-screen p-4">
      <div className="text-center w-full max-w-sm">
        <img 
          src={Group1} 
          alt="Pokémon Group" 
          className="mx-auto mb-4 w-full max-w-xs"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800 mb-1">
          Poké<span className='text-pink-500'>book</span>
        </h1>
        <p className="text-zinc-600 mb-6 text-sm sm:text-base">
          Largest Pokémon index with information about every Pokémon you can think of.
        </p>
        <div className="relative rounded-full shadow-sm w-full">
          <input 
            type="text" 
            placeholder="Enter pokemon name" 
            className="pl-5 pr-10 py-2 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-6 h-6 text-pink-500"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>
        <button className="mt-4 underline "onClick={()=>navigate(`//${product.id}`)}>View all</button>
      </div>
    </div>
  );
};

export default PokeBook;
