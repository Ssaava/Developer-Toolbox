import { HiOutlineMenu } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div
        className="px-8 py-6 sm:flex sm:justify-between sm:items-center border-b w-full tablet:w-[calc(100%-20rem)] ms-auto
       bg-white text-xl "
      >
        <div className="cursor-pointer text-3xl text-[#0F172A] font-primaryFont font-extrabold">
          Developer ToolBox
        </div>
        <div className="flex sm:justify-between items-center gap-6 max-[640px]:mt-4 ">
          <HiOutlineMenu className="tablet:hidden text-2xl" />
          <BsSun className="text-2xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};
export default Header;
