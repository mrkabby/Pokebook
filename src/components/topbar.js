import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Group1 from "../../src/assets/Group 1.png";
import Theme from '../components/thememodal';
import { useTheme } from '../components/themecontext';

const Topbar = () => {
  const { themeColor } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [showThemeModal, setShowThemeModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <div className="bg-zinc-100 flex items-center justify-between" style={{ borderBottom: `2px solid ${themeColor}` }}>
      <div className="flex items-center w-1/2 md:w-auto object-contain lg:px-10">
        <Link to = "/" >
        <img src={Group1} alt="Pokebook Logo" className="h-10 md:h-14 relative " />
        </Link>
        <h1 className="text-xl sm:text-xl font-bold text-zinc-800 mb-3">
          Poké<span style={{ color: themeColor }}>book</span>
        </h1>
      </div>
      <form className="flex-grow flex mx-2 md:mx-72 relative" onSubmit={handleSearch}>
       <input
          type="text"
          placeholder="Enter Pokémon name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full max-w-md p-2 pl-10 bg-white rounded-full border border-zinc-300 shadow-sm focus:outline-none focus:border-1 focus:ring-2  focus:ring-offset-2 pt-1 pb-1`}
        />

        <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={themeColor}
            className="w-6 h-6 text-pink-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      <button
        onClick={() => setShowThemeModal(true)}
        className= "w-6 h-5 rounded-full focus:outline-none ring-1 ring-black ring-offset-2 lg:w-10 lg:h-10"
        style={{ backgroundColor: themeColor }}
      >
        <span style={{ color: themeColor }} className="sr-only">Choose Theme</span>
      </button>
      <Theme show={showThemeModal} onClose={() => setShowThemeModal(false)} />
    </div>
  );
};

export default Topbar;
