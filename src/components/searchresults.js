import React from 'react';
import ListViewCard from '../components/cards/listviewcard';

const SearchResultsPage = ({ searchResults }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map((pokemon) => (
          <ListViewCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
