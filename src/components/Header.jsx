import { HiSearch, HiOutlineMenu } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="px-8 py-6 flex justify-between items-center border-b">
        <div className="">Logo</div>
        <div className="flex justify-between border-2 items-center px-4 rounded-md bg-gray-600 py-3 w-5/12">
          <input
            className="outline-none text-white bg-transparent w-10/12"
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
