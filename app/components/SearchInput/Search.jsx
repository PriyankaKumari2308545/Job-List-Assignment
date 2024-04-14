import React, { useCallback } from "react";
import Image from 'next/image'
// import Search from "../../assets/Search.svg";

const SearchInput = ({ onChange, value,placeholderText }) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <div className="flex items-center h1-medium w-[25.625rem] p-[0.375rem] bg-[#fff] rounded-lg shadow-md">
      {/* <img src={Search} alt="search" /> */}
      <Image
      src="/Search.svg"
      width={40}
      height={40}
      alt="Picture of the author"
    />
      <input
        type="text"
        className="font-semibold py-3 px-3 border-0 h1-bold rounded-lg bg-[#fff] text-lg outline-none focus:outline-none focus:bg-[#fff] active:bg-[#fff]"
        placeholder={placeholderText}
        aria-label="Search task"
        aria-describedby="basic-addon1"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
