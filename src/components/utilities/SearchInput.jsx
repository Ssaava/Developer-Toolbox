import { HiSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <div className="flex justify-between border-2 items-center px-4 border-none rounded-md bg-white dark:bg-gray-950 py-3 w-full cursor-pointer">
      <input
        className="outline-none text-white text-base max-w-prose bg-transparent w-10/12 h-8 cursor-pointer"
        type="search"
        placeholder="search resources..."
        onChange={() => {}}
      />
      <HiSearch className="text-2xl dark:text-white" />
    </div>
  );
};

export default SearchInput;
