// these images shall be updated dynamically from the user's profile as stored in the database
import { PropTypes } from "prop-types";
const Avatar = ({ src = "Avatar-man.png" }) => {
  // src = "../../../public/avatar-man.png";
  return (
    <>
      <div className="w-24 h-24 flex justify-center m-auto items-center overflow-hidden text-white rounded-full bg-stone-300 dark:bg-gray-900">
        <img alt="this is a profile image" src={src} className="block" />
      </div>
    </>
  );
};
Avatar.propTypes = {
  src: PropTypes.string,
};
export default Avatar;
