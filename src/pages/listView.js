import React, { useState } from 'react';
import Topbar from '../components/topbar';
import PokemonCard from '../components/listviewcard';
import useQueryPokemon from '../components/usequearypokemon';
import SelectPage from '../components/selectpage';
import Pagination from '../components/pagination';
import TubeSpinner from "../assets/tube-spinner.svg";

const ListView = () => {
  const { allPokemons, loading } = useQueryPokemon();
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const totalPages = Math.ceil(allPokemons.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageSizeChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); 
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allPokemons.slice(startIndex, endIndex);
  };

  const handleViewDetails = (id) => {
    setSelectedPokemon(id === selectedPokemon ? null : id);
  };

  const pageNumbers = [];
  const maxPageButtons = 5;
  const halfMaxButtons = Math.floor(maxPageButtons / 2);

  let startPage = Math.max(1, currentPage - halfMaxButtons);
  let endPage = Math.min(totalPages, currentPage + halfMaxButtons);

  if (endPage - startPage + 1 < maxPageButtons) {
    if (currentPage <= halfMaxButtons) {
      endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    } else if (currentPage + halfMaxButtons >= totalPages) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Topbar />
      <div className="flex justify-center m-5 md:p-10">
        {loading ? (
          <img src={TubeSpinner} alt="Loading" className="w-24 h-24"/>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {getPageData().map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={{ ...pokemon, showDetails: pokemon.id === selectedPokemon }}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-24 pb-6 justify-between items-center">
        <div className="flex">
          <Pagination
            handlePrevPage={handlePrevPage}
            currentPage={currentPage}
            startPage={startPage}
            endPage={endPage}
            totalPages={totalPages}
            handleClick={handleClick}
            pageNumbers={pageNumbers}
            handleNextPage={handleNextPage}
          />
        </div>
        <div className="flex mt-4 md:mt-0">
          <SelectPage
            itemsPerPage={itemsPerPage}
            handlePageSizeChange={handlePageSizeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ListView;
