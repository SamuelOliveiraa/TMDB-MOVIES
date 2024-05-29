import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types"; // Importe o PropTypes

function ShowStars(props) {
  return (
    <span className="my-2 flex items-center gap-2">
      <FaStar className="text-yellow-400" /> {props.stars}
    </span>
  );
}

// Defina os tipos das props usando PropTypes
ShowStars.propTypes = {
  stars: PropTypes.number.isRequired // Defina stars como um número obrigatório
};

export default ShowStars;
