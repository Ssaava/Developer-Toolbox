import { HiOutlineMenu } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
const Header = () => {
  const [theme, setTheme] = useState(false);
  const elementDocument = document.documentElement;
  useEffect(() => {
    if (theme) {
      elementDocument.classList.remove("dark");
    } else {
      elementDocument.classList.add("dark");
    }
    return () => "";
  }, [theme, elementDocument]);
  return (
    <>
      <div
        className=" sticky top-0 z-10 px-8 py-6 sm:flex sm:justify-between sm:items-center border-b w-full tablet:w-[calc(100%-20rem)] ms-auto
       bg-white text-xl dark:bg-gray-950 dark:border-gray-900 dark:text-white  "
      >
        <div className="cursor-pointer text-3xl text-[#0F172A] dark:text-white font-primaryFont font-extrabold">
          Developer ToolBox
        </div>
        <div className="flex sm:justify-between items-center gap-6 max-[640px]:mt-4 ">
          <HiOutlineMenu className="tablet:hidden text-2xl" />
          <BsSun
            className="text-2xl cursor-pointer"
            onClick={() => setTheme(!theme)}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
