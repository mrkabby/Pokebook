import React from "react";
import { useTheme } from "./themecontext";

const Pagination = ({
  handlePrevPage,
  currentPage,
  startPage,
  endPage,
  totalPages,
  handleClick,
  pageNumbers,
  handleNextPage,
}) => {
  const themeColor = useTheme();

  return (
    <div className="flex flex-wrap justify-center items-center space-x-1">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="mx-1 px-2 py-1 border rounded-lg bg-[#f6ecea] text-black "
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      {startPage > 1 && (
        <>
          <button
            onClick={() => handleClick(1)}
            className="mx-1 px-3 py-1 border rounded-lg"
            style={
              currentPage === 1
                ? { backgroundColor: themeColor.themeColor, color: "#f6ecea" }
                : { backgroundColor: "#f6ecea", color: "black" }
            }
          >
            1
          </button>
          {startPage > 2 && <span className="mx-1">...</span>}
        </>
      )}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber)}
          className="mx-1 px-3 py-1 border rounded-lg"
          style={
            currentPage === pageNumber
              ? { backgroundColor: themeColor.themeColor, color: "#f6ecea" }
              : { backgroundColor: "#f6ecea", color: "black" }
          }
        >
          {pageNumber}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="mx-1">...</span>}
          <button
            onClick={() => handleClick(totalPages)}
            className="mx-1 px-3 py-1 border rounded-lg"
            style={
              currentPage === totalPages
                ? { backgroundColor: themeColor.themeColor, color: "#f6ecea" }
                : { backgroundColor: "#f6ecea", color: "black" }
            }
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="mx-1 px-2 py-1 border rounded-lg bg-[#f6ecea] text-black disabled:opacity-50"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;