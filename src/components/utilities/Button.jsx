import { PropTypes } from "prop-types";
// read about proptypes before installing them here -> https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/
const Button = ({ width = "fit-content", margin }) => {
  return (
    <div
      className="rounded bg-purple-900 text-center py-3 px-8 hover:bg-slate-900 text-white box-border text-xl"
      style={{ width: width, marginTop: margin }}
    >
      Button
    </div>
  );
};
Button.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
};
export default Button;
