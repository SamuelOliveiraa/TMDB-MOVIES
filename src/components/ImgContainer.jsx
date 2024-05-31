import PropTypes from "prop-types"; // Importe o PropTypes
import { LuImageOff } from "react-icons/lu";

function ImgContainer(props) {
  const { src } = props;

  return (
    <div className="w-full h-full text-yellow-300 text-6xl flex items-center justify-center">
      {src ? <img src={`https://image.tmdb.org/t/p/w342${src}`} alt="" className="w-full h-full" /> : <LuImageOff />}
    </div>
  );
}

// Defina os tipos das props usando PropTypes
ImgContainer.propTypes = {
  src: PropTypes.string.isRequired // Defina src como uma string obrigatório
};

export default ImgContainer;
