import { HiOutlineMenu } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import { MdDarkMode, MdOutlineArrowDropDown, MdComputer } from "react-icons/md";
import { useEffect, useState } from "react";
const Header = () => {
  const [themeType, setThemeType] = useState(
    "theme" in localStorage ? localStorage.getItem("theme") : "system"
  );
  const [themeSwitch, setThemeSwitch] = useState(true);
  const elementDocument = document.documentElement;

  const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  themeQuery.addEventListener("change", () => switchSystemTheme());
  // useEffect hook
  useEffect(() => {
    switch (themeType) {
      case "dark":
        elementDocument.classList.add("dark");
        localStorage.setItem("theme", "dark");

        break;
      case "light":
        elementDocument.classList.remove("dark");
        localStorage.setItem("theme", "light");

        break;
      default:
        localStorage.removeItem("theme");
        switchSystemTheme();
        break;
    }
  }, [themeType, elementDocument]);

  //switch theme when system changes
  function switchSystemTheme() {
    if (
      themeQuery.matches ||
      (themeType === "dark" && !("theme" in localStorage))
    ) {
      localStorage.setItem("theme", "dark");
      elementDocument.classList.add("dark");

      setThemeType("system");
    } else {
      localStorage.setItem("theme", "light");
      elementDocument.classList.remove("dark");
      setThemeType("system");
    }
  }

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
                  className={`text-2xl cursor-pointer ${
                    themeType !== "light" && "hidden"
                  }`}
                />
                <MdDarkMode
                  className={`text-2xl cursor-pointer ${
                    themeType !== "dark" && "hidden"
                  }`}
                />
                <MdComputer
                  className={`text-2xl cursor-pointer ${
                    themeType !== "system" && "hidden"
                  }`}
                />
              </div>{" "}
              <MdOutlineArrowDropDown />
            </div>

            {/* selection list */}
            <div
              className={`absolute border-2 dark:bg-gray-950 dark:border-gray-900 w-20 -left-1 py-2 ${
                themeSwitch && "hidden"
              }`}
              onClick={() => {
                setThemeSwitch(!themeSwitch);
              }}
            >
              <BsSun
                className="text-5xl cursor-pointer w-full py-2 text-gray-300  dark:hover:bg-gray-900 hover:text-white"
                onClick={() => setThemeType("light")}
              />
              <MdDarkMode
                className="text-5xl cursor-pointer w-full py-2 text-gray-300 dark:hover:bg-gray-900 hover:text-gray-500"
                onClick={() => setThemeType("dark")}
              />
              <MdComputer
                className="text-5xl cursor-pointer w-full py-2 text-gray-300  dark:hover:bg-gray-900 hover:text-blue-400"
                onClick={() => switchSystemTheme()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
