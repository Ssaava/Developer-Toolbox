import { PropTypes } from "prop-types";

const Links = ({ mt = "mt-2", children }) => {
  return (
    <>
      <div
        className={`flex gap-4 items-center hover:bg-stone-300 hover:text-stone-400 w-full py-3 px-4 ${mt} text-xl`}
      >
        {children}
      </div>
    </>
  );
};
export default Links;
Links.propTypes = {
  children: PropTypes.object,
  mt: PropTypes.string,
};
