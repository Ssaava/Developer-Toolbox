import { HiSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <div className="flex justify-between border-2 items-center px-4 rounded-md bg-white py-3 w-full cursor-pointer">
      <input
        className="outline-none text-white text-base max-w-prose bg-transparent w-10/12 cursor-pointer"
        type="search"
        placeholder="search resources..."
      />
      <HiSearch className="text-2xl" />
    </div>
  );
};

export default SearchInput;
