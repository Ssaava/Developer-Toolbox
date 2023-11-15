import { Button, Avatar, Links } from "./utilities";
import { TiHome } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";

const SideNav = () => {
  return (
    <div className="md:w-80 w-0 overflow-hidden py-5 h-full fixed bg-white top-0 border-r-2 border-stone-300">
      <div className="profile px-5 text-xl">
        <Avatar />
        <div>
          <h2 className="m-auto w-fit mt-2">Name</h2>
          <p className="m-auto w-fit text-stone-400">About info</p>
        </div>
        <Button width="100%" margin="10px" />
      </div>
      <div className="links">
        <Links mt="mt-6">
          <TiHome />
          <p>Home</p>
        </Links>
        <Links>
          <FaQuestion />
          <p>About</p>
        </Links>
        <Links>
          <IoCall />
          <p>Contact</p>
        </Links>
      </div>
    </div>
  );
};

export default SideNav;
