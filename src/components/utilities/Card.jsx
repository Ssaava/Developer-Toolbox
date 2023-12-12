import { PropTypes } from "prop-types";
const Card = ({ details, title, icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group/card h-72 p-4 mt-12 rounded relative bg-white cursor-pointer hover:bg-slate-100 transition dark:bg-gray-950 dark:text-white hover:dark:bg-gray-800"
    >
      <div className={`card-img `} style={{ backgroundImage: `url(${icon})` }}>
        {/* <img src="../../../public/JavaScript-logo.png" alt="resource name" /> */}
      </div>
      <div className="group/info mt-7">
        <div className="mb-4 text-3xl text-[#2c3e50] dark:text-white font-primaryFont font-bold">
          {title}
        </div>
        <div className="text-base h-[125px] text-gray-300 group-hover/card:text-[#737476] font-textFont overflow-y-hidden transition">
          {details}
        </div>
        <div className="more-btn text-[#737476] group-hover/card:text-blue-400">
          Read more
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  details: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
};
export default Card;
