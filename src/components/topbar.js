import React, { useState } from 'react';
import Group1 from "../../src/assets/Group 1.png";


const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className={`bg-zinc-100  flex items-center justify-space-betwwen ${darkMode ? 'dark' : ''}`}>
      <div className="flex items-center w-1/2 md:w-auto"> {/* Adjust width for mobile */}
        <img src={Group1} alt="Pokebook Logo" className="h-8 md:h-12 mt-6" />
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800 mb-1">
          Poké<span className='text-pink-500'>book</span>
        </h1>
      </div>
      <div className="flex-grow flex  mx-2 md:mx-72 relative">
        <input
          type="text"
          placeholder="Enter Pokémon name"
          className="w-full max-w-md p-2 pl-10 bg-white rounded-full border border-zinc-300 shadow-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-pink-500 absolute left-1 top-1/2 transform -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-pink-500 w-5 h-4 md:w-10 md:h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        <span className="sr-only">Toggle Theme</span>
      </button>
    </div>
  );
};

export default Topbar;
