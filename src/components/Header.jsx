import { HiOutlineMenu } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import { MdDarkMode, MdOutlineArrowDropDown, MdComputer } from "react-icons/md";
import { useEffect, useState } from "react";
const Header = () => {
  const [theme, setTheme] = useState(false);
  const [themeSwitch, setThemeSwitch] = useState(true);
  const elementDocument = document.documentElement;
  useEffect(() => {
    if (theme) {
      elementDocument.classList.remove("dark");
    } else {
      elementDocument.classList.add("dark");
    }
  }, [theme, elementDocument, themeSwitch]);
  return (
    <>
      <div
        className=" sticky top-0 z-10 px-8 py-6 sm:flex sm:justify-between sm:items-center border-b w-full tablet:w-[calc(100%-20rem)] ms-auto
       bg-white text-xl dark:bg-gray-950 dark:border-gray-900 dark:text-white  "
      >
        <div className="cursor-pointer text-3xl text-[#0F172A] dark:text-white font-primaryFont font-extrabold">
          Developer ToolBox
        </div>

        {/* drop down menu */}
        <div className="flex sm:justify-between items-center gap-6 max-[640px]:mt-4 ">
          <HiOutlineMenu className="tablet:hidden text-2xl" />
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => {
                setThemeSwitch(!themeSwitch);
              }}
            >
              <div>
                <BsSun
                  className={`text-2xl cursor-pointer hidden`}
                  onClick={() => setTheme(!theme)}
                />
                <MdDarkMode
                  className="text-2xl cursor-pointer hidden"
                  onClick={() => setTheme(!theme)}
                />
                <MdComputer
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme(!theme)}
                />
              </div>{" "}
              <MdOutlineArrowDropDown />
            </div>

            {/* selection list */}
            <div
              className={`absolute border-2 dark:bg-gray-950 dark:border-gray-900 w-14 py-2 ${
                themeSwitch && "hidden"
              }`}
              onClick={() => {
                setThemeSwitch(!themeSwitch);
              }}
            >
              <BsSun
                className="text-2xl cursor-pointer w-full mb-2 text-gray-300  dark:hover:bg-gray-900 hover:text-white"
                onClick={() => setTheme(!theme)}
              />
              <MdDarkMode
                className="text-2xl cursor-pointer w-full mb-2 text-gray-300 dark:hover:bg-gray-900 hover:text-gray-500"
                onClick={() => setTheme(!theme)}
              />
              <MdComputer
                className="text-2xl cursor-pointer w-full text-gray-300  dark:hover:bg-gray-900 hover:text-blue-400"
                onClick={() => setTheme(!theme)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
