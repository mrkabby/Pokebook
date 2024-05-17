import React from "react";

const SelectPage = ({ itemsPerPage, handlePageSizeChange }) => {
  return (
    <div className="flex justify-center items-center">
      <label htmlFor="itemsPerPage" className="mr-2 text-sm text-gray-700">
        Items per page:
      </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={handlePageSizeChange}
        className="border rounded px-2 py-1 bg-[#d6d0d0] text-sm"
      >
        <option value={8}>8</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
      </select>
    </div>
  );
};

export default SelectPage;
