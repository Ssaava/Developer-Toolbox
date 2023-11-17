import { PropTypes } from "prop-types";

const Links = ({ mt = "mt-2", info, children }) => {
  return (
    <>
      <div
        className={`group flex gap-4 items-center hover:bg-stone-300 hover:text-stone-400 w-full py-3 px-4 ${mt} text-xl`}
      >
        {children}
        <p className="group-hover:translate-x-2 group-hover:text-stone-400 transition-all">
          {info}
        </p>
      </div>
    </>
  );
};
export default Links;
Links.propTypes = {
  children: PropTypes.object,
  mt: PropTypes.string,
  info: PropTypes.string,
};
