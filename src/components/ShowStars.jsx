import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types"; // Importe o PropTypes

function ShowStars(props) {
  return (
    <span className="flex items-center gap-2 w-16 bg-zinc-700 text-yellow-300 my-4 rounded-md p-2">
      <FaStar className="text-yellow-400" /> {props.stars}
    </span>
  );
}

// Defina os tipos das props usando PropTypes
ShowStars.propTypes = {
  stars: PropTypes.string.isRequired // Defina stars como um número obrigatório
};

export default ShowStars;
