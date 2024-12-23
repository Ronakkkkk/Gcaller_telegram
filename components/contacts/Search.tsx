"use client";
import Image from "next/image";
import React, { ChangeEvent } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="h-[44px] w-full sm:w-[24.375rem] bg-[#9747FF] bg-opacity-30 rounded-lg flex items-center px-3 mt-[25px]">
      <Image
        src="/icons/contacts/search.png"
        height={15}
        width={15}
        alt="search"
        style={{ objectFit: "contain" }}
        className="mr-4"
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent w-full h-full text-white placeholder-gray-200 outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
