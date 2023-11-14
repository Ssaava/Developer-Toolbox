import { Button, Avatar } from "./utilities";

const SideNav = () => {
  return (
    <div className="md:w-3/12 w-0 overflow-hidden p-5 bg-white absolute top-0">
      <div className="profile ">
        <Avatar />
        <div>
          <h2 className="m-auto w-fit">Name</h2>
          <p className="m-auto w-fit text-stone-400">About info</p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default SideNav;
