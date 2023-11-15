import { HiSearch, HiOutlineMenu } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="px-8 py-6 flex justify-between items-center border-b w-full md:w-[calc(100%-20rem)] ms-auto bg-white text-xl">
        <div className="">Logo</div>
        <div className="flex justify-between border-2 items-center px-4 rounded-md bg-stone-300 py-3 w-9/12 max-w-xl">
          <input
            className="outline-none text-white text-base max-w-prose bg-transparent w-10/12"
            type="search"
            placeholder="search resources..."
          />
          <HiSearch />
        </div>
        <div className="flex justify-between items-center gap-6">
          <HiOutlineMenu />
          <BsSun />
        </div>
      </div>
    </>
  );
};
export default Header;
