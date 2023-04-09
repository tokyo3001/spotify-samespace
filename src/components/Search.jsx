import React from "react";

function Search() {
  return (
    <div className="hidden lg:flex items-center justify-between border border-gray-400 rounded-lg px-2 py-1 ml-9 mt-7 mb-8 w-96">
      <input
        type="text"
        placeholder="Search Song, Artist"
        className="w-48 bg-transparent focus:outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}

export default Search;
