import React, { useState } from 'react';
import Topbar from '../components/topbar';
import ListViewCard from '../components/cards/listviewcard';
import SelectPage from '../components/selectpage';
import Pagination from '../components/pagination';
import TubeSpinner from "../assets/tube-spinner.svg";
import useQueryAllPokemon from '../components/usehooks/usequeryallpokemon';
import { useTheme } from '../components/themecontext';

const ListView = () => {
  const { allPokemons, loading } = useQueryAllPokemon();
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { themeColor } = useTheme();

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
  <div className="min-h-screen w-screen flex flex-col" style={{ background: '#F1F1F1' }}>
      {/* Topbar at the very top */}
      <div className="w-full">
        <Topbar />
      </div>
      {/* Main card content fills the rest of the screen */}
      <div className="flex-1 flex items-start justify-center pt-0 pb-0">
  <div className="w-screen h-screen rounded-none shadow-none p-8 flex flex-col items-center" style={{ minHeight: '100vh', minWidth: '100vw', background: '#F1F1F1' }}>
          {/* Pokémon grid using ListViewCard */}
          <div className="w-full flex justify-center pb-2">
            {loading ? (
              <img src={TubeSpinner} alt="Loading" className="w-24 h-24" />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
                {getPageData().map((pokemon) => (
                  <ListViewCard
                    key={pokemon.id}
                    pokemon={{ ...pokemon, showDetails: pokemon.id === selectedPokemon }}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Pagination and page size selector */}
          <div className="w-full flex flex-col md:flex-row px-4 pb-6 justify-between items-center mt-8 md:mt-0">
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
                themecolor={themeColor}
                color={themeColor}
                bgColor="#F1F1F1"
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
      </div>
    </div>
  );
}

export default ListView;
