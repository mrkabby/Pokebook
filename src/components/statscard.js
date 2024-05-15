import React, { useState } from 'react';

const PokemonModal = ({ name, image, types, content, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // Set the first tab as active by default

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="fixed inset-0 bg-gray-500/50 flex justify-end"> {/* Adjust opacity for better visibility */}
      <div className="w-full md:w-1/2 bg-white h-full overflow-y-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <button onClick={() => /* Handle close modal logic */}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex mb-4">
          <img
            src={image}
            alt={name}
            className="w-48 h-48 rounded-full mr-4"
          />
          <div className="flex flex-col space-y-2">
            <div className="text-sm font-semibold text-gray-700">Types:</div>
            <ul className="flex flex-wrap gap-1">
              {types.map((type) => (
                <li
                  key={type}
                  className={`text-xs rounded-full px-2 py-1 bg-${type.toLowerCase()}-200 text-${type.toLowerCase()}-800`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex border-b border-gray-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-3 py-2 text-gray-500 font-medium ${
                activeTab === tab.id ? 'border-b-2 border-blue-500' : ''
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">{content[activeTab]}</div> {/* Display content based on active tab */}
      </div>
    </div>
  );
};

export default PokemonModal;
